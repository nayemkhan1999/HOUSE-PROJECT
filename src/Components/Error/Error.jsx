import { Link } from "react-router-dom"


const Error = () => {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-[50vh]  font-black text-center">404</h2>
      <p className="  text-red-500 font-bold text-3xl">Error Page not found</p>
      <Link to='/'> <button className=" mt-4 font-bold text-xl btn btn-error text-white rounded-xl px-2 ">GO BACK HOME</button></Link>
    </div>
  )
}

export default Error
