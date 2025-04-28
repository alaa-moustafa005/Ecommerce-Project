import Title from "../assets/head.png";
export default function Header() {
  return (
    <div className="m-5 flex items-center justify-evenly flex-wrap text-gray-700">
      <div>
        <div className="flex items-center">
          <p className="w-15 h-1 bg-black rounded-full m-3"></p>
          <p className="capitalize ">best sellers</p>
        </div>
        <h1 className="capitalize text-7xl mb-4">latest arrivals</h1>
        <div className="flex items-center">
          {" "}
          <p className="capitalize sm:mb-3">shop now</p>
          <p className="w-15 h-1 bg-black bg-opacity-10 rounded-full m-3"></p>
        </div>
      </div>
      <img className="w-110" src={Title} />
    </div>
  );
}
