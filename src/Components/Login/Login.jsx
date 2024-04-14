import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../login.css";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Login = () => {
  const { loginUser,googleLogin,GitHubLogin } = useContext(AuthContex);
  const [showpassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });

  };


  // Social Auth provider navigate 
  const handleSocialLogin = socialProvider =>{
    socialProvider()
    .then(result =>{
      if(result.user){
        navigate(location?.state || "/")
      }
    })
  }

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
              <div className="form-control relative">
                <label className="label">
                  <span className="">Password</span>
                </label>

            
               <input
                  type={showpassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered text-black font-medium relative"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-[53px] right-[15px] text-black text-lg"
                  onClick={() => setShowPassword(!showpassword)}
                >
                  {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
           
              

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
              <div className="flex items-center justify-between gap-2">
                {/* Another LInks */}

              
                <button onClick={()=> handleSocialLogin(googleLogin)} className="btn btn-active text-sm opacity-90 text-black font-medium">continue with
              <span className="text-3xl"><FcGoogle /></span>
                </button>
            

               
               <button onClick={()=> handleSocialLogin(GitHubLogin)} className="btn  btn-active text-sm opacity-90 text-black font-medium">continue with
               <span className="text-3xl"><FaGithubSquare /></span>
               </button>
             
                
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
