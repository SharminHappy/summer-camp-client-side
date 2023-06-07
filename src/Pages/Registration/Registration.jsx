import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";




const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const auth = getAuth(app);


    const { register, handleSubmit, getValues, formState: { errors } } = useForm();



    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmToggle, setConfirmToggle] = useState(false);





    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(result.user,loggedUser.name,loggedUser.photo)
            })
        const updateUserProfile = (user, name, photo) => {
            updateProfile(auth, user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('user profile updated')
                })
                .catch(error => {
                    setError(error.message)
                })

        }
    };




    return (
        <div>
            <Helmet>
                <title>SPSC@MP | Registration</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content  w-full ">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Enter Your Name" className="input input-bordered  hover:border-cyan-950 border-b-4" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" className="input input-bordered mb-3  hover:border-cyan-950 border-b-4" />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold mb-3">Password</span>
                                </label>
                                <input type={passwordToggle ? "text" : "password"} name="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                    placeholder=" Type Password" className="input input-bordered  hover:border-cyan-950 border-b-4 mb-3"></input>
                                {errors.password?.type == 'required' && <p className="text-red-700">Password is required</p>}
                                {errors.password?.type == 'minLength' && <p className="text-red-700">Password have to 6 chartactes </p>}
                                {errors.password?.type == 'pattern' && <p className="text-red-700">The password do not have a capital letter &  do not have a special character </p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold">Confirm Password</span>
                                </label>

                                <input type={confirmToggle ? "text" : "password"} name="confirm"  {...register("confirm", { validate: (value) => value === getValues("password") })} placeholder="Confirm Password" className="input input-bordered  hover:border-cyan-950 border-b-4 mb-3"></input>
                                {errors.confirm && <span className="text-red-700">password does not match</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-cyan-950 font-semibold ">Photo URL</span>
                                </label>
                                <input type='text' {...register("photo")} name='photo' placeholder="Photo URL" className="input input-bordered  hover:border-cyan-950 border-b-4"></input>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-cyan-950 text-white hover:text-cyan-950" type="submit" value="Registration" />
                            </div>
                        </form>

                        <p className=" mx-auto mb-10"><small>Have an account ! <Link to='/login' className=" text-cyan-950 font-bold ">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;