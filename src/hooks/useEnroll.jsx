import { useQuery } from '@tanstack/react-query'



const useEnroll = () => {

   

    const { isLoading: loading, data: enroll = [], refetch } = useQuery({
        queryKey: ['enroll'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/enroll')
            console.log('res fetch', res)
            return res.json();

        },
    })
    return [enroll , loading, refetch]

};

export default useEnroll ;