import { useEffect, useState } from "react";
import AllCard from "../AllCard/AllCard";

const Cards = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div data-aos="zoom-in-up"data-aos-duration='1000' className="flex flex-col lg:w-full md:full">
      <p className="font-poppins text-center lg:text-4xl md:text-3xl text-xl font-black mt-8 ">
        Featured Properties
      </p>
        <div className="divider divider-neutral"> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {user.map((card) => (
          <AllCard key={card.id} card={card}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
