import axios, { AxiosInstance } from 'axios';
import { API_URL } from './index';


const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

class reservationClass {
  axios: AxiosInstance = instance;
    constructor(axios?: AxiosInstance) {
      this.axios = axios;
    }

    async getReservations() {
        const { data } = await this.axios({
          method: 'GET',
          url: `/ec2/reservations/user`,    
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          }, 
        });
        return data;
      }
    
 
}