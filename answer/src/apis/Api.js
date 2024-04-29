import axios from 'axios';

//     /*
//         공통 api 호출 함수 작성

//         1. async-await 활용
//         2. method, url, data를 받아 api 요청
//     */

export const request = async (url, method, data) => {

    try {
        const response = await axios({
            method: method,
            url: url,
            data: data
        });
        return response.data;
    } catch (error) {
        console.error('API request error: ', error);
        throw error;
    }
};
