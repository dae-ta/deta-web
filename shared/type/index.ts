import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export type RequestWithCookie = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
