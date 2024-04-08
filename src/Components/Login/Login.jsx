import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email,password} = data;
    loginUser(email,password)
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
          <div className="card shrink-0 w-96  shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mx-auto">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                 {errors.email && <span className="text-red-500 opacity-70 text-xs">This field is required</span>}
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
                 {errors.password && <span className="text-red-500 opacity-70 text-xs">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
