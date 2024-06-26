import axios from 'axios';

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
