import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import "../../login.css";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Registar = () => {
  const { createUser } = useContext(AuthContex);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });

      if(password.length < 6){
        setError("Password must be 6 charctors")
        return
      }
    
  };

  return (
    <div className="container mx-auto img">
      <div className="hero ">
        <div className="hero-content ">
          <div className="card shrink-0 w-96  text-white bg-[#555] shadow-xl opacity-70 z-10">
            <h1 className="text-5xl font-bold mx-auto mt-2">Registar</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="">Full Name</span>
                </label>
                <input
                  type="FullName"
                  placeholder="FullName"
                  className="input input-bordered  text-black font-medium"
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
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered  text-black font-medium"
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
                  <span className="">photoURL</span>
                </label>
                <input
                  type="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered  text-black font-medium"
                  {...register("photoURL", { required: false })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered  text-black font-medium"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600 font-medium text-sm opacity-70">
                    This field is required
                  </span>
                )}
              </div>
              {
                error && <small className="text-red-600">{error}</small>
              }
              <div className="form-control mt-6">
                <button className="btn btn-error text-white font-bold text-xl">
                  Registar
                </button>
              </div>
           
              <div className="text-center">
                <Link to="/login">
                  <span className="text-base">Already a member </span>
                  <span className="text-success font-bold underline ">
                    Login now
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
