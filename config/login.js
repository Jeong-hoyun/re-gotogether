import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

/** 예약용 함수 MySwal를 통해서 예약 확인 모달창이 뜸  */
export const SetReservation = async (data) => {  
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const url = `/ec2/reservations`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: JSON.stringify(data),
      withCredentials: true,
      url,
    };
    try {

      const res = await axios(options);
      console.log(res)
      if (res.status == 200) {
        MySwal.fire({
          text: `예약 감사합니다`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {    
            return "OK"            
          }
        }); 
      }else {
        MySwal.fire({
          text: "로그인 뒤 예약해주세요",
          icon: "error",
          confirmButtonText: "OK",
        });
      }      
    } catch (error) {
      MySwal.fire({
          text: `출발일과 인원수를 추가해주세요`,
          icon: "error",
          confirmButtonText: "OK",
        })
      source.cancel("Operation canceled by the user.");
    }
  };