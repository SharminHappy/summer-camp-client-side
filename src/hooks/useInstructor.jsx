import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isInstructor,isLoading:isInstructorLoading}=useQuery({
        queryKey:['isInstructor',user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('Access_Token'),
        queryFn:async()=>{
            const res =await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is Instructor response',res)
            return res.data.instructor;
        }
    })
    return[isInstructor,isInstructorLoading]
};

export default useInstructor;