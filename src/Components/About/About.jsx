import { Helmet } from "react-helmet-async";
import {
  TiSocialInstagram,
  TiSocialSkype,
  TiSocialTwitter,
} from "react-icons/ti";
import imgAbout from "/src/images/about.jpg";
const About = () => {
  return (
    <div className="container  mx-auto font-poppins">
       <Helmet>
        <title>House | About</title>
      </Helmet>
      <div className="mt-5 rounded-lg">
        <img  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="opacity-90 rounded-lg relative "
          src={imgAbout}
          alt=""
        />
        <div className="absolute lg:top-[405px] top-[90px] lg:left-[450px] rounded-lg opacity-70 text-center lg:pt-16 pt-8 bg-teal-500 text-white lg:text-4xl font-black lg:w-[500px] lg:h-52">
          <span>About Us</span>
        </div>
      </div>

      <div>
        <h1 data-aos="zoom-in-up"data-aos-delay='1000' className="text-center text-4xl font-semibold mt-10 opacity-70">
          Meet The Exparts Behind The <br /> Energy Revolation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-36 mt-8">
          <div data-aos="fade-down"data-aos-duration='2000' className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/communication-work_1098-14852.jpg?t=st=1713105178~exp=1713108778~hmac=ce008f8b2413eb2a4876ea752ce9a596ed696d890dccac6fa418d3ac8b71c1f1&w=740"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-xl font-bold">Jhon Deo</h2>
                <h2 className="text-teal-400 text-xs">CEO and Founder</h2>
              </div>
              <p>
                Although historically construction has been a male-dominated
                industry, more employers are hiring women into these roles. This
                is in part due to the high demand for labor. According to a
                model developed by?
              </p>
              <div className="flex items-center justify-start text-4xl text-teal-600 gap-4">
                <TiSocialTwitter />
                <TiSocialInstagram />
                <TiSocialSkype />
              </div>
            </div>
          </div>
          <div data-aos="fade-up"data-aos-duration='2400' className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-298.jpg?t=st=1713105191~exp=1713108791~hmac=36c84fc3e92d13530f40c8c31c11aae2117679564d5c0e51af9d7908049b83a9&w=740"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-xl font-bold">Jhon Smith</h2>
                <h2 className="text-teal-400 text-xs">Derector of Operation</h2>
              </div>
              <p>
                Although historically construction has been a male-dominated
                industry, more employers are hiring women into these roles. This
                is in part due to the high demand for labor. According to a
                model developed by?
              </p>
              <div className="flex items-center justify-start text-4xl text-teal-600 gap-4">
                <TiSocialTwitter />
                <TiSocialInstagram />
                <TiSocialSkype />
              </div>
            </div>
          </div>
          <div data-aos="fade-down"data-aos-duration='2800' className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/working-hard-building-man-construction-worker_1122-1849.jpg?t=st=1713105093~exp=1713108693~hmac=2125907f2ea2215e3a1d8d137bca82077ed8ca1bb00e57bfb09ca6114d0a9185&w=740"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-xl font-bold">Bob jhonson</h2>
                <h2 className="text-teal-400 text-xs">Lead Engineer</h2>
              </div>
              <p>
                Although historically construction has been a male-dominated
                industry, more employers are hiring women into these roles. This
                is in part due to the high demand for labor. According to a
                model developed by?
              </p>
              <div className="flex items-center justify-start text-4xl text-teal-600 gap-4">
                <TiSocialTwitter />
                <TiSocialInstagram />
                <TiSocialSkype />
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default About;
