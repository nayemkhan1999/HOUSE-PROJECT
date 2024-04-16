import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useParams } from "react-router-dom";
const CardDetails = () => {
  const [hero, setHero] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/public/fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        const sigleData = data.find((card) => card.id == +id);
        setHero(sigleData);
      });
  }, [id]);
  console.log(hero);
  const {
    title,
    house_name,
    description,
    price,
    status,
    area,
    location,
    image,
    beds,
    baths,
    rating,
    reviews,
    contact,
    quality,
  } = hero;
  return (
    <div className="container mx-auto font-poppins mt-6 ">
       <Helmet>
        <title>House | View Property</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={image}
            className="lg:max-w-2xl  rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex flex-col w-full">
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                className="divider divider-warning"
              >
                <span className="text-orange-400 font-bold">WHY CHOOSE US</span>
              </div>
            </div>
            <h1
              data-aos="fade-left"
              data-aos-delay="2000"
              className="text-4xl font-bold"
            >
              {title}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="2200"
              className="py-6 opacity-70 text-sm font-semibold"
            >
              {description}
            </p>
            <div className="flex flex-col-reverse gap-2">
              <div
                data-aos="fade-left"
                data-aos-delay="2500"
                className="flex gap-2"
              >
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-accent "
                  checked
                />
                <p className="opacity-90 font-bold text-lg">
                  Professional and efficient project delivery
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="2400"
                className="flex gap-2"
              >
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-accent "
                  checked
                />
                <p className="opacity-90 font-bold text-lg">{quality}</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="2300"
                className="flex gap-2"
              >
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-accent "
                  checked
                />
                <p className="opacity-90 flex gap-2">
                  <span className="font-bold text-2xl">{house_name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 font-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="2600"
              className="flex gap-5 mt-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-gray-700 text-sm font-semibold opacity-80">
                {location}
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="2700"
              className="flex gap-5 mt-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p className="text-gray-700 text-sm font-semibold opacity-80">
                {contact}
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="2800"
              className="flex gap-5 mt-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-blue-500 text-sm font-semibold opacity-80 underline ">
                http://localhost:5174/
              </p>
            </div>
            <NavLink to="/">
              <button
                data-aos="fade-down"
                data-aos-duration="3000"
                className="btn btn-active btn-accent text-white font-semibold mx-auto float-end mt-5 "
              >
                GO TO HOME
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
