import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import "../../login.css";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto img">
      <div className="hero ">
        <div className="hero-content ">
          <div className="card shrink-0 w-96  text-white bg-[#555] shadow-xl opacity-70 z-10">
            <h1 className="text-5xl font-bold mx-auto mt-2">House</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black font-medium"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 opacity-70 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-black font-medium"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 opacity-70 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-error text-white font-bold text-xl">
                  Sing In
                </button>
              </div>
              <label className="opacity-60">
                <a href="#">Forgot password?</a>
              </label>

              <div className="flex flex-col w-full">
                <div className="divider divider-neutral">Or Login With</div>
              </div>
              <div className="flex text-center items-center mx-auto gap-2 text-4xl">
                {/* Another LInks */}

                <FcGoogle />
                <FaGithubSquare />
              </div>

              <div className="text-center">
                <Link to="/registar">
                  <span> New to House? </span>
                  <span className="text-success  font-bold underline ">
                    Sign up now
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

export default Login;
