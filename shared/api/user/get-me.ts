import { createInstance } from '@/shared/api';
import { RequestWithCookie } from '@/shared/type';

export const GET_USER_API_PATH = `/user/me`;

export const getUserMe = async (req?: RequestWithCookie) => {
  const { data } = await createInstance(req).get(GET_USER_API_PATH);

  return data;
};
