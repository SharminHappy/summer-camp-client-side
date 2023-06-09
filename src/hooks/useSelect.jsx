import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelect = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('Access_Token');

    const [axiosSecure]=useAxiosSecure();

    const { refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/selects?email=${user?.email}`)
            console.log('res from axios',response)
            return response.data;
        },
    })
    return [select, refetch]

};

export default useSelect;