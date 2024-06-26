import { request } from './Api';

export const getUserInfo = async () => {
    return await request('http://localhost:4000/user', 'get');
};

