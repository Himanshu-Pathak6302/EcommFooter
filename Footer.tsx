import { TbTruckDelivery } from "react-icons/tb";
import ListComp from "./ListComp";

import { data } from "./ComponetData/ListData";
import { about } from "./ComponetData/ListData"; 
import { help } from "./ComponetData/ListData"; 
import NewsLetter from "./NewsLetter";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineSafety } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="col-span-9 bg-cyan-700 flex justify-around items-center h-40 md:font-bold">
        <div className="items-center justify-items-center">
          <TbTruckDelivery className="size-20" />
          <p>48hrs* Delivery</p>
        </div>
        <div className="justify-items-center">
          <IoIosTimer className="size-20" />
          <p>30 days Return Policy</p>
        </div>
        <div className="justify-items-center">
          <AiOutlineSafety className="size-20" />
          <p>100% Genuine Products</p>
        </div>
        <div className="justify-items-center">
          <RiCustomerService2Fill className="size-20" />
          <p>24x7 Customer Care</p>
        </div>
      </div>
      <div className="grid grid-cols-10 bg-black p-8 ">
        <div className="col-span-2 bg-black text-black flex justify-items-center space-x-100 text-left gap-12 ">
          <ListComp title="Stores" listArray={data} />
        </div>
        <div className="col-span-2 bg-black text-black flex justify-items-center space-x-100 text-left gap-12">
          <ListComp title="Get To Know Us" listArray={about} />
        </div>
        <div className="col-span-2 bg-black text-black flex justify-items-center space-x-100 text-left gap-12">
          <ListComp title="Here To Help" listArray={help} />
        </div>
        <div className="col-span-4 flex flex-col item-center">
          <NewsLetter />
          <div className="text-gray-500 md:font-bold text-xl self-start">
            <h3>Follow Us On:</h3>
          </div>
          <div className="text-black text-2xl ">
            <ul className="flex flex-row gap-2">
              <li className="p-4 cursor cursor-pointer md:font-bold hover:bg-cyan-700 text-white transition-all duration-200 rounded-full">
                <FaFacebookF />
              </li>
              <li className="p-4 cursor cursor-pointer md:font-bold hover:bg-pink-600 text-white transition-all duration-200 rounded-full">
                <FaInstagram />
              </li>
              <li className="p-4 cursor cursor-pointer md:font-bold hover:bg-cyan-500 text-white transition-all duration-200 rounded-full">
                <FaTwitter />
              </li>
              <li className="p-4 cursor cursor-pointer md:font-bold hover:bg-red-700 text-white transition-all duration-200 rounded-full">
                <TfiYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
