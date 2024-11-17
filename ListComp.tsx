import React from "react";
import { FaLocationDot } from "react-icons/fa6";

type propData = {
  title: string;
  listArray: string[];
  icon?: React.ComponentType;
};

const ListComp = ({ title, listArray, icon }: propData) => {
  return (
    <div className="col-span-2 row-start-2">
      <div className="w-fit ">
        <h3 className="font-bold mb-3 text-white">{title}</h3>
        <ul className="items-start flex flex-col gap-2">
          {listArray.map((address, i) => (
            <li>
              <div className="flex items-center gap-2">
                {icon && <FaLocationDot className="text-white" />}
                <div className="flex flex-col text-sky-500">{address}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComp;
