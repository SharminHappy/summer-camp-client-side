import { useQuery } from '@tanstack/react-query'



const useHistory = () => {



    const { isLoading: loading, data: history = [], refetch } = useQuery({
        queryKey: ['history'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/history')
            console.log('res fetch', res)
            return res.json();

        },
    })
    return [history, loading, refetch]

};

export default useHistory;