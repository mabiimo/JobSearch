import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import CompanyData2Popular from "./CompanyPopularData";

const CompanyList = () => {
  return (
    <div className=" flex gap-10 justify-center flex-wrap items-center py-[2rem]">
      <div className="jobContainer flex gap-[4rem] justify-center  flex-wrap items-center ">
        {CompanyData2Popular.map(({ id, kantor, nilai }) => {
          return (
            <div key={id} className="group group/item singleJob p-5 rounded-[10px]  ">
              <span className="flex justify-between items-center gap-3">
                <div className="flex gap-3 justify-between items-center">
                  <a className="text-[#ccc] hover:text=[#fff] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700">
                    <ImOffice size={30} />
                  </a>
                  <div className="">
                    <h6 className="font-bold text-[16px] text-gray-700  no-underline hover:underline cursor-pointer hover:text-blue-700">{kantor}</h6>
                    <div className="flex gap-5 pt-[8px]">
                      <div className="flex">
                        <AiFillStar color="#FACA15" />
                        <AiFillStar color="#FACA15" />
                        <AiFillStar color="#FACA15" />
                        <AiFillStar color="#FACA15" />
                        <AiFillStar color="#FACA15" />
                      </div>
                      <div className="text-[12px] text-blue-500 "> {nilai} Reviews</div>
                    </div>
                  </div>
                </div>
              </span>

              <span className="flex justify-between items-center py-[0.5rem] pt-[0.5rem]">
                <div>
                  <div className="flex items-center justify-between gap-11">
                    <h6 className="font-bold text-[12px] text-gray-700  no-underline hover:underline cursor-pointer hover:text-blue-700">Salaries</h6>
                    <h6 className="font-bold text-[12px] text-gray-700  no-underline hover:underline cursor-pointer hover:text-blue-700">Questions</h6>
                    <h6 className="font-bold text-[12px] text-gray-700 no-underline hover:underline cursor-pointer hover:text-blue-700">Ask Jobs</h6>
                  </div>
                </div>
              </span>
            </div>
          );
        })}
      </div>
      <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400 ">See More</button>
    </div>
  );
};
export default CompanyList;
