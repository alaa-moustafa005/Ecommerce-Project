export default function Sub() {
  return (
    <div>
      <div className="flex items-start justify-around flex-wrap gap-30 my-20">
        <div className="md:w-30 sm:w-10  ">
          <i className="m-3 fa-solid fa-magnifying-glass text-3xl text-gray-700"></i>
          <p>Easy Exchange Policy</p>
          <p className=" mt-3 text-gray-400">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className=" md:w-30 sm:w-10 ">
          <i className="fa-solid fa-retweet m-3 text-3xl text-gray-700"></i>
          <p>7 Days Return Policy</p>
          <p className="mt-3 text-gray-400">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="md:w-30 sm:w-10  ">
          <i className="fa-solid fa-headset m-3 text-3xl text-gray-700"></i>
          <p>Best customer support</p>
          <p className="mt-3 text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
      <div className="flex-col items-center justify-center py-10">
        <h2 className="text-3xl text-center">Subscribe now & get 20% off</h2>
        <p className="text-gray-400 text-center my-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex justify-center items-center flex-wrap">
          {" "}
          <input
            className="p-4 border-gray-200 border w-80 text-sm"
            placeholder="Enter Your Email"
          />
          <button className="p-4 border-gray-200 border bg-black text-white text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
