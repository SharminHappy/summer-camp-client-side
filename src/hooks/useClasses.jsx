import { useQuery } from '@tanstack/react-query'



const useClasses = () => {

   

    const { isLoading: loading, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-side-phi.vercel.app/classes')
            console.log('res fetch', res)
            return res.json();

        },
    })
    return [classes, loading, refetch]

};

export default useClasses;