import { Link, NavLink } from "react-router-dom"


const Nav = () => {

    const Links =(
        <>
        
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        </>
    )
  return (
    <div className="navbar bg-base-100 container  mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Links}
        </ul>
      </div>
      <p className=" text-rose-500 font-bold text-4xl">Grasess</p>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {Links}
      </ul>
    </div>
    <div className="navbar-end">
      <Link to='/registar'><button className="btn btn-info btn-active font-bold text-white">LOGIN</button></Link>
    </div>
  </div>
  )
}

export default Nav
