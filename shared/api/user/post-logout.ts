import { createInstance } from '@/shared/api';
import { RequestWithCookie } from '@/shared/type';

export const POST_USER_LOGOUT_API_PATH = `/user/logout`;

export const postUserLogout = async (req?: RequestWithCookie) => {
  const { data } = await createInstance(req).post(POST_USER_LOGOUT_API_PATH);

  return data;
};
