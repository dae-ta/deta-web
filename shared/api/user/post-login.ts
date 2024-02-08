import { createInstance } from '@/shared/api';
import { RequestWithCookie } from '@/shared/type';

type User = {
  email: string;
  password: string;
};

const USER_LOGIN_API_PATH = `/user/login`;

export const postUserLogin = async (payload: User, req: RequestWithCookie) => {
  const { data } = await createInstance(req).post(USER_LOGIN_API_PATH, payload, {
    withCredentials: true,
  });

  return data;
};
