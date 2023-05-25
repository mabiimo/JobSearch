import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import company from "../../Assets/company.png";
import Data from "../Data/data";
import axios from "axios";

const Jobs = () => {
  const [cardShow, setcardShow] = useState(8);

  const loadMore = () => {
    setcardShow(cardShow + cardShow);
  };

  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContent();
  });

  const getContent = async () => {
    const response = await axios.get("http://localhost:5001/contents");

    setContents(response.data);
  };

  const slice = Data.slice(0, cardShow);

  return (
    <div className=" flex gap-10 justify-center flex-wrap items-center ">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {slice.map(({ id, title, time, location, desc, compName }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>

                <span className="flex items-center gap-1 text-[#ccc]">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc] ">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>

              <div className="company flex items-center gap-3 ">
                <img src={company} alt="Company Logo" className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{compName}</span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:text-white hover:bg-white group-hover/item:text-textColor group-hover:text-white">Aplly Now</button>
            </div>
          );
        })}
      </div>
      <button onClick={() => loadMore()} className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400">
        See More
      </button>
    </div>
  );
};

export default Jobs;
