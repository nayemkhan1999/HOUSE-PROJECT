import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../login.css";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Registar = () => {
  const { createUser, UserUpdateProfile } = useContext(AuthContex);
  const [error, setError] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    console.log(email, password, name, photoURL);


    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "you must have an one uppercase letter!"
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "you must have an one uppercase letter!"
      );
    }

  if (password.length < 6) {
    return toast.error("Password must be 6 charctors!");
  }
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
        }
        UserUpdateProfile(name, photoURL).then(() => {
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });

    

    toast.success("Registar Succesful");
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
                  <span className="">Email</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered  text-black font-medium"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 font-medium opacity-70 text-sm">
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
                  name="email"
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
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered  text-black font-medium"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type={showpassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered  text-black font-medium relative"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-[430px] right-[40px] text-black text-lg"
                  onClick={() => setShowPassword(!showpassword)}
                >
                  {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                {errors.password && (
                  <span className="text-red-600 font-medium text-sm opacity-70">
                    This field is required
                  </span>
                )}
              </div>
              {error && <small className="text-red-600">{error}</small>}
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
        <Toaster />
      </div>
    </div>
  );
};

export default Registar;
