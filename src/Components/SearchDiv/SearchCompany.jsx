import React from "react";

const SearchCompany = () => {
  return (
    <div>
      <h1 className="text-textColor text-[40px] py-[2rem] pb-[0.5rem] font-bold block ">Find great places to work</h1>
      <h1 className="text-[#a5a6a6] text-[19px] w-[100%] pb-[2rem]">Get access to millions of company reviews</h1>
      <div>
        <h1 className="text-textColor text-[18px] font-bold block">Company name or job title</h1>
      </div>
      <div className="flex gap-3 py-[1rem]">
        <input
          type="search"
          className="shadow-lg shadow-greyIsh-700 bg-transparent focus:outline-none block w-full p-3 text-sm text-black-500 font-medium border border-blue-200 rounded-[10px]  focus:border-blue-900"
          placeholder="Company Search..."
        />
        <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-700">Search</button>
      </div>
    </div>
  );
};

export default SearchCompany;
