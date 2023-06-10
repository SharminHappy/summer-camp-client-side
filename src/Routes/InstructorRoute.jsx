import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const[isInstructor,isInstructorLoading]=useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56 mx-auto my-40"></progress>
        
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;