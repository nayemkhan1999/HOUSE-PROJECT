import { FaLocationDot, FaSquarePhone, FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { SlSocialBehance } from "react-icons/sl";
import img from "/src/images/contactUs.jpg";

const ContactUs = () => {
  return (
    <div className="container  mx-auto font-poppins">
        <div className="mt-5 rounded-lg">
        <img className="opacity-90 rounded-lg relative " src={img} alt="" />
        <div className="absolute top-[90px] rounded-lg opacity-80 text-center pt-16 bg-black text-white text-4xl font-bold w-[500px] h-52">
        <span >Contact Us</span>
        </div>
        </div>
        <div className="flex items-center justify-evenly mx-20">
            <div className="mt-14">
                <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
                <p className="opacity-60 text-base font-medium mb-2">Message me with an introduction, saying who you are and <br /> why you are reaching out to me. Have a real <br /> profile with lots of answers and a presence of </p>
                 <div className="flex items-center gap-4 mt-3">
                <span className="text-3xl bg-sky-800 text-white"><FaSquarePhone /></span>
                <span className="font-semibold">+1(333)000-53623</span>
            </div>
                 <div className="flex items-center gap-4 mt-3">
                <span className="text-3xl bg-sky-800 text-white"><MdOutlineForwardToInbox /></span>
                <span className="font-semibold">pageOne@gamil.com</span>
            </div>
                 <div className="flex items-center gap-4 mt-3">
                <span className="text-3xl text-red-600 "><FaLocationDot /></span>
                <span className="font-semibold">City Center House Form Uk</span>
            </div>
            <div className="flex items-center gap-4 mt-5">
                <p className="font-bold text-xs">Follow Us</p>
                <GrInstagram />
                <FaTwitter />
                <SlSocialBehance />
            </div>

            </div>
           
            <div className="bg-black w-80 h-auto text-white px-5 py-4 mt-20">
                <h1 className="text-xl mb-4">Send us message</h1>
                <h1 className="text-xs">your name</h1>
                <div className="divider divider-neutral"></div>
                <h1 className="text-xs">your email</h1>
                <div className="divider divider-neutral"></div>
                <h1 className="text-xs">your massage</h1>
                <br />
                <br />
                <div className="divider divider-neutral"></div>
                <button className="btn btn-active btn-xs text-white border-none bg-orange-400">Send Message</button>


            </div>
        </div>
      
    </div>
  )
}

export default ContactUs
