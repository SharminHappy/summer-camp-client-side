import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token=import.meta.env.VITE_Image_token;
const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const { register, handleSubmit} = useForm();
    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
       const formData=new FormData();
       formData.append('image',data.image[0]);

       fetch(img_hosting_url,{
        method:'POST',
        body:formData
       })
       .then(res=>res.json())
       .then(imageResponse=>{
        console.log(imageResponse);
        if(imageResponse.success){
            const imageURL=imageResponse.data.display_url;
            const {class_name,instructor_name,price,available_seats}=data;
            const classItem={class_name,instructor_name,price:parseFloat(price),available_seats:parseInt(available_seats),image:imageURL}
            console.log(classItem);
            axiosSecure.post('/classes',classItem)
            .then(data=>{
                console.log('after posting new class item',data.data);
            })
        }
       })
    }
   
    return (
        <div className="w-full pl-10">

            <Helmet>
                <title>SPSC@MP| Dashboard |My Selected Classes</title>
            </Helmet>
            <SectionTitle
                heading={'Add a Class'}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex gap-3 my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text"
                            {...register('class_name', { required: true, maxLength: 80 })}
                            placeholder="Enter Class Name" className="input input-bordered w-full hover:border-cyan-950 border-b-4" required></input>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image</span>
                        </label>
                        {/* TODO:file-input file hover bg color */}
                        <input type="file"  {...register('image', { required: true })} className="file-input file-input-bordered  w-full hover:border-cyan-950 border-b-4" required />

                    </div>
                </div>
                <div className="flex gap-3 my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text"
                            {...register('instructor_name', { required: true, maxLength: 80 })}
                            className="input input-bordered w-full hover:border-cyan-950 border-b-4" value={user.displayName} readOnly></input>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text"
                            {...register('instructor_email', { required: true })}
                            className="input input-bordered w-full hover:border-cyan-950 border-b-4" value={user.email} readOnly></input>
                    </div>
                </div>
                <div className="flex gap-3 my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="number" {...register('available_seats', { required: true })} placeholder="Enter Available Seats " className="input input-bordered w-full hover:border-cyan-950 border-b-4" required></input>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number"
                            {...register('price', { required: true })}
                            placeholder="Enter Class Price" className="input input-bordered w-full hover:border-cyan-950 border-b-4" required></input>
                    </div>
                </div>
                {/* TODO: */}
                <input className=" btn  bg-slate-400   text-cyan-950 mt-4 hover:bg-cyan-950 hover:text-white font-semibold" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;