import { NavLink } from "react-router-dom";

const AllCard = ({ card }) => {
  const {
    title,
    id,
    house_name,
    price,
    status,
    area,
    location,
    image,
    beds,
    baths,
    rating,
    reviews,
  } = card;

  return (
    <div className="container mx-auto font-poppins">
      <div className="card card-compact h-[80vh] bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className=" flex items-center justify-between mx-4 mt-5">
          <h2 className="card-title font-bold text-2xl">{house_name}</h2>
          <p className="card-title text-xl font-semibold ">{price}</p>
        </div>
        <p className="mx-4 text-sm font-semibold opacity-90">{title}</p>
        <div className="divider mx-14"></div>
        <div className="flex items-center gap-16 mx-4 font-semibold">
          <p>{beds}</p>
          <p>{baths}</p>
        </div>
        <div className="flex items-center gap-1 mx-4 text-sm font-semibold">
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

          <p className="text-gray-700 opacity-80">{location}</p>
        </div>
        <div className="divider mx-14"></div>
        <div className="mx-4 flex items-center gap-2">
          <div className="rating rating-sm rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
              checked
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
              checked
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className=" bg-orange-400 mask mask-star-2 mask-half-2"
            />
          </div>
          <p className="font-bold ">{rating}</p>
          <p className="ml-16 opacity-70 font-medium text-gray-600">
            {reviews}
          </p>
        </div>
        <NavLink to={`/details/${id}`}>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-400 ease-out border-2 border-purple-500 rounded-full shadow-md group ml-24 mt-4 mb-5"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
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
              SEE MORE DETAILS...
            </span>
            <span className="relative invisible">SEE MORE DETAILS...</span>
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default AllCard;
