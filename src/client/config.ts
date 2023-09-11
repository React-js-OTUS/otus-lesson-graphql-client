import { PUBLIC_PATH } from 'src/config';

export const NOT_AUTHORIZED_CODE = 'ERR_JWT_ERROR';

export const PORT = 4002;
export const HOST = 'localhost';
export const URL = process.env.LOCAL === 'true' ? `http://${HOST}:${PORT}` : PUBLIC_PATH;
