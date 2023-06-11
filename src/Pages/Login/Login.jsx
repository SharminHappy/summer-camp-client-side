import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });

            })
    }

    const togglePassword = () => {
        if (passwordShown == 'password') {
            setPasswordShown(!passwordShown)
            return

        }
        setPasswordShown('password')

    }
    return (
        
        <div>
            <Helmet>
                <title>SPSC@MP | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content  w-full ">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-20">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered  hover:border-cyan-950 border-b-4" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold">Password</span>
                                </label>
                                <input type={passwordShown ? "text" : "password"} name="password" placeholder=" Type Password" className="input input-bordered  hover:border-cyan-950 border-b-4"></input>
                                <div className="input-group-btn mx-auto">
                                    <button onClick={togglePassword}>
                                        {
                                            passwordShown == 'password' ? <FaEye className=" absolute -translate-y-12 translate-x-32"></FaEye> :
                                                <FaEyeSlash className=" absolute -translate-y-12 translate-x-32"></FaEyeSlash>

                                        }

                                    </button></div>

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-cyan-950 text-white hover:text-cyan-950" type="submit" value="Login" />
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>

                        <p className=" mx-auto mb-10"><small>Does not have a account yet?<Link to='/registration' className=" text-cyan-950 font-bold ">Registration</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Login;