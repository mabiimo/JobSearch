import React from "react";
import company from "../../Assets/company.png";
const Value = () => {
  return (
    <div className="mb-[2rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">The value the holds us true and to account</h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center mb-5">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]   ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={company} alt="" className="w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
          </div>
          <p className="font-light text-textColor text-[12px] opacity-[.7] py-[1rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={company} alt="" className="w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
          </div>
          <p className="font-light text-textColor text-[12px] opacity-[.7] py-[1rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={company} alt="" className="w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">Simplicity</span>
          </div>
          <p className="font-light text-textColor text-[12px] opacity-[.7] py-[1rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </div>
      <div class="bg-slate-200 rounded-[10px] text-white  ">
        <ul className="flex justify-between p-[70px]  rounded-[20px] items-center">
          <div>
            <h1 className="text-blueColor font-extrabold text-[20px]">
              Ready To Switch a <strong>career</strong>?
            </h1>
            <h1 className="text-black font-extrabold text-[20px]">Lest Get started!</h1>
          </div>
          <div>
            <span className="text-blue-700 hover:text-white border-[2px] cursor-pointer border-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm p-6 text-center text-[18px]  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 ">
              Gets Started
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Value;
