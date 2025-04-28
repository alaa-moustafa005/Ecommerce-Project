import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <div className="mt-50">
      <div className="flex items-start justify-around flex-wrap gap-7 text-center pb-5">
        <div>
          <img className="w-30 mb-5" src={Logo} alt="ref" />
          <p className="w-70 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3 className=" mb-5 uppercase text-3xl">company</h3>
          <ul className="text-gray-600">
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div>
          <h3 className=" mb-5 capitalize text-3xl">get in touch</h3>
          <ul className="text-gray-600">
            <li>+1-000-000-0000 </li>
            <li>greatstackdev@gmail.com </li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-200">
        <p className="flex items-center justify-center text-gray-700 pt-5 text-center ">
          Copyright 2024@ greatstack.dev - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
