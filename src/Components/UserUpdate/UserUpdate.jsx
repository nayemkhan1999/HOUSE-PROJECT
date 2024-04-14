import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const UserUpdate = () => {
  const { UserUpdateProfile, user } = useContext(AuthContex);
  const {
    handleSubmit,
  } = useForm();

  const { email, displayName, photoURL } = user || {};

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoURL;
    console.log(name, photo);
    UserUpdateProfile(name, photo)
      .then((result) => {
        console.log(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="lg:text-lg md:text-base text-sm font-semibold ">
        New name
      </label>
      <br />

      <input
        type="name"
        name="name"
        className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
        placeholder="Enter  your name"
        required
      />

      <label className="lg:text-lg md:text-base text-sm font-semibold ">
        New photo URL
      </label>
      <br />

      <input
        type="text"
        name="photoURL"
        className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
        placeholder="Enter  your photo url"
        required
      />

      <br />
      <button className="bg-[#1a56db] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
        Save Change
      </button>
    </form>
  );
};

export default UserUpdate;
