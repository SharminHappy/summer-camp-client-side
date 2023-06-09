import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';





const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {


        axiosSecure.interceptors.request.use(
            (config) => {
                const accessToken = localStorage.getItem('Access_Token');
                if (accessToken) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    logOut()
                        .then(() => {
                            navigate('/login');
                        })
                        .catch((logoutError) => {
                            console.error('Logout error:', logoutError);
                        });
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;
