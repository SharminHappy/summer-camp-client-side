import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSelect = () => {
    const { user } = useContext(AuthContext);

    const {refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selects?email=${user?.email}`)
            return response.json();
        },
    })
    return [select,refetch]

};

export default useSelect;