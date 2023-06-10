import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useSelect = () => {

    const { user, loading } = useContext(AuthContext);
   

    const [axiosSecure] = useAxiosSecure();
    

    const { refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn: async () => {
            const res = await axiosSecure(`/selects/?email=${user.email}`)
            // console.log('res from axios', res)
           return res.data;
           
        },
    })
    return [select, refetch]

};

export default useSelect;