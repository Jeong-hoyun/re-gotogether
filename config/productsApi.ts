import axios, { AxiosInstance } from 'axios';
import { API_URL } from './index';


const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

class productClass {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    this.axios = axios;
  }

  async getItem() {
    const { data } = await axios({
      method: 'GET',
      url: `${API_URL}/api/products?&pageSize=100`,   
    });
 
    return data;
  }

  async getSearchItem(keyword:string) {
    const { data } = await axios({
      method: 'GET',
      url:  `${API_URL}/api/products/?keyword=${keyword}`,   
    });
 
    return data;
  }




}

const productApi = new productClass();

export default productApi;