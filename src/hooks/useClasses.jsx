import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';


const useClasses = () => {

    // const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('Access_Token');

    // const [axiosSecure] = useAxiosSecure();
    // TODO:slove why response.data undefined

    const { isLoading: loading, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            console.log('res fetch', res)
            return res.json();

        },
    })
    return [classes, loading, refetch]

};

export default useClasses;