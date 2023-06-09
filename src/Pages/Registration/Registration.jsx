import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";





const Registration = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();





    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();



    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmToggle, setConfirmToggle] = useState(false);






    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile updated')

                        const saveUser = { name: data.name, email: data.email}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Profile Updated',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');

                                }
                            })
                    })
                    .catch(error => console.log(error))
            })


    }






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
                                <input type='text' {...register("photoURL")} placeholder="Photo URL" className="input input-bordered  hover:border-cyan-950 border-b-4"></input>
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
}




export default Registration;