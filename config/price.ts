
export function getPrice(data:string|number|null) {
  try {
    if(data===null){
      throw new Error("가격문의")
    }
  } catch (error) {
    return false
  }

  if(typeof data==="number"){
    const result=`${data
        .toString()
        .replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ",",
        )}원`
     return result   
  }
  return  data

}
