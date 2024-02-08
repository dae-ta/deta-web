import { createInstance } from '@/shared/api';
import { RequestWithCookie } from '@/shared/type';

type User = {
  email: string;
  password: string;
};

const USER_JOIN_API_PATH = `/user/join`;

export const postUserJoin = async (payload: User, req?: RequestWithCookie) => {
  const { data } = await createInstance(req).post(USER_JOIN_API_PATH, payload, {
    withCredentials: true,
  });

  return data;
};
