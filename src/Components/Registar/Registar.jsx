import { useContext } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Registar = () => {
  const { createUser } = useContext(AuthContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email,password} = data;
   createUser(email,password)
   .then(result=>{
    console.log(result.user);
   })
   .catch(error=>{
    console.log(error);
   })
  };

  return (
    <div className="container mx-auto">
      <div className="hero ">
        <div className="hero-content ">
          <div className="card shrink-0 w-96  shadow-2xl bg-base-300">
            <h1 className="text-5xl text-gray-600 font-bold mx-auto">
              Registar now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FullName</span>
                </label>
                <input
                  type="FullName"
                  placeholder="FullName"
                  className="input input-bordered"
                  {...register("FullName", { required: true })}
                />
                {errors.FullName && (
                  <span className="text-red-600 font-medium text-sm opacity-70">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-medium opacity-70 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                  {...register("photoURL", { required: false })}
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600 font-medium text-sm opacity-70">
                    This field is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white font-bold text-xl">
                  Registar
                </button>
              </div>
              <Link to="/login" className="text-blue-700 font-bold underline ">
                Please Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
