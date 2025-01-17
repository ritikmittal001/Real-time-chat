import { axiosInstance, url } from './index';

export const signupUser = async (user) => {
    try {
        const response = await axiosInstance.post(url + '/api/auth/signup', user);
        return response.data; // Expected { message: '', success: true/false }
    } catch (error) {
        console.error('Signup Error:', error.response?.data || error.message);
        return error.response?.data || { message: 'Something went wrong', success: false };
    }
};

export const loginUser = async (user) => {
    try {
        const response = await axiosInstance.post(url + '/api/auth/login', user);
        // Save token in localStorage
        if (response.data.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data; // Expected { message: '', success: true/false, token: '' }
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        return error.response?.data || { message: 'Something went wrong', success: false };
    }
};
