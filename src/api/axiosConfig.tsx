import { fetchAuthSession } from 'aws-amplify/auth';
import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'https://api.pastforward.link/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// Axios 요청을 보내기 전에 실행
axiosInstance.interceptors.request.use(
  async config => {
    try {
      // 현재 세션에서 토큰 가져오기
      const { accessToken } = (await fetchAuthSession()).tokens || {};

      // accessToken이 없으면 반환
      if (!accessToken) {
        console.log('세션 토큰 없음');
        return config;
      }

      // 헤더에 토큰 추가
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    } catch (err) {
      console.error('에러', err);
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
