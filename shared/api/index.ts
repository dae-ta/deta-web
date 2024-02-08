import { BASE_API_PATH } from '@/shared/constants';
import { RequestWithCookie } from '@/shared/type';
import Axios from 'axios';

export const createInstance = (req?: RequestWithCookie) => {
  const instance = Axios.create({
    baseURL: BASE_API_PATH,
    withCredentials: true,
  });

  if (req?.headers.cookie) {
    instance.defaults.headers.common['Cookie'] = req.headers.cookie;
  } else {
    // 브라우저 환경: Axios는 자동으로 쿠키를 관리하므로 별도의 설정이 필요하지 않습니다.
  }

  return instance;
};
