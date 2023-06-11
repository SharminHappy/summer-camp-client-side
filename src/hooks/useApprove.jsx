import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useApprove = () => {
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isApprove,isLoading:isApproveLoading}=useQuery({
        queryKey:['isApprove',user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn:async()=>{
            const res =await fetch(`/users/admin/${user?.email}`);
            // console.log('is admin response',res)
            return res.data.admin;
        }
    })
    return[isApprove,isApproveLoading]
};

export default useApprove;