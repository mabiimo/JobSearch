import React from "react";

const ResgisterPage = () => {
  return (
    <div className="p-20 items-center m-auto bg-white">
      <div className="gap-3 py-[1rem] ">
        <input
          type="password"
          className="shadow-lg shadow-greyIsh-700 bg-transparent focus:outline-none mb-5 block w-full p-3 text-sm text-black-500 font-medium border border-blue-200 rounded-[10px]  focus:border-blue-900"
          placeholder="Username"
        />
        <input
          type="search"
          className="shadow-lg shadow-greyIsh-700 bg-transparent focus:outline-none block w-full p-3 mb-5 text-sm text-black-500 font-medium border border-blue-200 rounded-[10px]  focus:border-blue-900"
          placeholder="Email"
        />
        <input
          type="password"
          className="shadow-lg shadow-greyIsh-700 bg-transparent focus:outline-none  mb-5 block w-full p-3 text-sm text-black-500 font-medium border border-blue-200 rounded-[10px]  focus:border-blue-900"
          placeholder="Password"
        />
        <input
          type="password"
          className="shadow-lg shadow-greyIsh-700 bg-transparent focus:outline-none block w-full p-3 text-sm text-black-500 font-medium border border-blue-200 rounded-[10px]  focus:border-blue-900"
          placeholder="Validation Password"
        />
      </div>

      <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-700 ">Register</button>
    </div>
  );
};

export default ResgisterPage;
