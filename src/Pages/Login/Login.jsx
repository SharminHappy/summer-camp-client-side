import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);



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
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordShown ? "text" : "password"} name="password" placeholder="password" className="input input-bordered"></input>
                                <div className="input-group-btn mx-auto">
                                    <button  onClick={togglePassword}>
                                    {
                                        passwordShown == 'password' ? <FaEye className=" absolute -translate-y-12 translate-x-32"></FaEye> :
                                            <FaEyeSlash className=" absolute -translate-y-12 translate-x-32"></FaEyeSlash>

                                    }

                                </button></div>

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;