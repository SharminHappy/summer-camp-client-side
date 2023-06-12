import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

// here
const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-server-side-phi.vercel.app',
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();




    useEffect(() => {


        axiosSecure.interceptors.request.use(
            (config) => {
                const accessToken = localStorage.getItem('Access_Token');
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },

        );

        axiosSecure.interceptors.response.use(
            (response) => response,
            // undefined,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');

                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return [axiosSecure]
};

export default useAxiosSecure;
