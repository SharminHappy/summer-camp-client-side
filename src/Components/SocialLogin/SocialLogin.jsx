import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                        navigate(from, { replace: true });

                    })

            })
    }

    return (
        <div className="mx-auto">
            <div className="divider  w-60 mb-5  text-cyan-950 font-bold">OR USING</div>
            <div>
                <button onClick={handleGoogleSignIn} className="gap-2 mx-24 my-5  ">

                    <FcGoogle className="text-5xl"></FcGoogle>

                </button>
            </div>
        </div>
    );
};

export default SocialLogin;