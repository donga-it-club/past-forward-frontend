import Axios from 'axios';

export const axiosInstance = Axios.create({
  // baseURL: 'http://-forward-load-balancer-1892345872.us-west-2.elb.amazonaws.com/',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default axiosInstance;
