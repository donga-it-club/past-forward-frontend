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
      const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();

      // authToken이 없으면 반환
      if (!authToken) {
        console.log('세션 토큰 없음');
        return config;
      }

      // 헤더에 토큰 추가
      config.headers.Authorization = `${authToken}`;
      // console.log('헤더에 토큰 추가 확인', config.headers.Authorization);
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

// Axios 응답을 받은 후 실행
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    // 401 에러일 경우
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 세션 새로 고침
        await currentSession();

        // 새로운 토큰으로 재시도
        const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
        originalRequest.headers.Authorization = `${authToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh 토큰 실패', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

// 세션 새로 고치는 함수
async function currentSession() {
  try {
    const { tokens } = await fetchAuthSession({ forceRefresh: true });
    console.log('새로운 세션:', tokens);
  } catch (err) {
    console.log('세션 새로 고치기 실패:', err);
    throw err; // 예외를 다시 던져서 호출하는 곳에서 처리하도록 함
  }
}
