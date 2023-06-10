import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isStudent,isLoading:isStudentLoading}=useQuery({
        queryKey:['isStudent',user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn:async()=>{
            const res =await axiosSecure.get(`/users/${user?.email}`);
            console.log('is admin response',res)
            return res.data.user;
        }
    })
    return[isStudent,isStudentLoading]
};

export default useStudent;