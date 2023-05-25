import React from "react";
import companyList from "../../Assets/companyList.png";
import { BsBookmark, BsBuildingSlash, BsBagDash } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import CompanyData from "./CompanyDataList";

const CompanyList = () => {
  return (
    <div className=" flex gap-10 justify-center flex-wrap items-center py-[2rem]">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center ">
        {CompanyData.map(({ id, company, location, business_fields, job_vacancie, timeLatest }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-3">
                <img src={companyList} alt="Company Logo" className="w-[30%]" />
                <div>
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{company}</h1>
                  <h6 className="text-[#ccc] text-[14px] group-hover:text-white">{location}</h6>
                </div>

                <a className="flex items-center justify-center text-[#ccc] hover:text-[#fff] ">
                  <BsBookmark />
                </a>
              </span>

              <span className="flex justify-between items-center py-[0.5rem] pt-[1rem]">
                <div>
                  <div className="flex gap-3">
                    <a className="text-[#ccc] hover:text=[#fff]">
                      <BsBuildingSlash />
                    </a>
                    <h6 className="text-[#000] group-hover:text-white text-[14px] font-semibold">{business_fields}</h6>
                  </div>
                  <div className="flex gap-3">
                    <a className="text-[#ccc] hover:text=[#fff]">
                      <BsBagDash />
                    </a>
                    <h6 className="text-blueColor group-hover:text-white text-[12px] ">{job_vacancie} Lowongan</h6>
                  </div>
                </div>
              </span>

              <span className="flex justify-between items-center py-[0.5rem] pt-[1rem]">
                <div>
                  <div className="flex gap-3">
                    <a className="text-[#ccc] hover:text=[#fff]">
                      <BiTimeFive />
                    </a>
                    <h6 className="text-[#ccc] text-[14px] group-hover:text-white">Terakhir Aktif {timeLatest} jam Lalu</h6>
                  </div>
                </div>
              </span>
            </div>
          );
        })}
      </div>
      <button onClick={() => loadMore()} className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400 ">
        See More
      </button>
    </div>
  );
};
export default CompanyList;
