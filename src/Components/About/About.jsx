import imgAbout from "/src/images/about.jpg";
const About = () => {
  return (
    <div className="container  mx-auto font-poppins">
      <div className="mt-5 rounded-lg">
        <img
          className="opacity-90 rounded-lg relative "
          src={imgAbout}
          alt=""
        />
        <div className="absolute top-[405px] left-[450px] rounded-lg opacity-70 text-center pt-16 bg-teal-500 text-white text-4xl font-bold w-[500px] h-52">
          <span>About Us</span>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl font-semibold">Meet The Exparts Behind The <br /> Energy Revolation</h1>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
