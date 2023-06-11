import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useClasses = () => {

    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('Access_Token');

    const [axiosSecure] = useAxiosSecure();
    // TODO:slove why response.data undefined

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn: async () => {
            const res = await axiosSecure(`/classes/?email=${user.email}`)
            console.log('res from axios', res)
           return res.data;
           
        },
    })
    return [classes, refetch]

};

export default useClasses;