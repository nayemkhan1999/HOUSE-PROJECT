import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

AOS.init();

const AllCard = ({ card }) => {
  const {
    title,
    id,
    house_name,
    price,
    area,
    location,
    image,
    beds,
    baths,
    rating,
    reviews,
    status,
  } = card;

  return (
    <div className="container mx-auto font-poppins">
      <div className="card card-compact h-[80vh] bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" flex items-center justify-between mx-4 mt-5">
          <h2
            data-aos="fade-right"
            data-aos-delay="1500"
            className="card-title font-bold text-2xl"
          >
            {house_name}
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="1000"
            className="card-title text-xl font-semibold "
          >
            {price}
          </p>
        </div>
        <div className=" flex items-center justify-between mx-4 mt-5">
          <p
            data-aos="fade-right"
            data-aos-delay="1600"
            className="mx-4 text-sm font-semibold opacity-90"
          >
            {title}
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="1700"
            className="flex items- gap-3"
          >
            <p className=" font-semibold">{status}</p>
            <img
              className="w-8 h-6"
              src="https://cdn-icons-png.flaticon.com/128/1441/1441353.png"
              alt=""
            />
          </div>
        </div>
        <div className="divider mx-14"></div>
        <div
          data-aos="fade-right"
          data-aos-delay="1800"
          className="flex items-center gap-16 mx-4 font-semibold"
        >
          <p>{beds}</p>
          <p>{baths}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1900"
          className="flex items-center gap-1 mx-4 text-sm font-semibold"
        >
          <p>{area}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500 ml-10"
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

          <p
            data-aos="fade-right"
            data-aos-delay="2000"
            className="text-gray-700 opacity-80"
          >
            {location}
          </p>
        </div>
        <div className="divider mx-14"></div>
        <div className="mx-4 flex items-center gap-2">
          <div className="rating rating-sm rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input
              data-aos="fade-up"
              data-aos-delay="2000"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2100"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
              checked
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2200"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2300"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2400"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2500"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2600"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
              checked
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2700"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2800"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              data-aos="fade-up"
              data-aos-delay="2900"
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
          </div>
          <p data-aos="fade-up" data-aos-delay="2600" className="font-bold ">
            {rating}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="2800"
            className="ml-16 opacity-70 font-medium text-gray-600"
          >
            {reviews}
          </p>
        </div>
        <NavLink data-aos="fade-up" data-aos-delay="3000" to={`/details/${id}`}>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out border-2 border-[#ff9e4f] rounded-full shadow-md group ml-24 mt-4 mb-5"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff9e4f]  group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-gray-500 font-semibold opacity-80 transition-all duration-300 transform group-hover:translate-x-full ease">
              View Property...
            </span>
            <span className="relative invisible">View Property...</span>
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default AllCard;
