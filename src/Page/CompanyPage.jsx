import React from "react";
import CompanyList from "../Components/Company/CompanyList";

import Footer from "../Components/FooterDiv/Footer";
import SearchCompany from "../Components/SearchDiv/SearchCompany";
import CompanyPopular from "../Components/Company/CompanyPopular";

const CompanyPage = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <SearchCompany />
      <CompanyList />
      <div>
        <h1 className="text-textColor text-[40px] py-[2rem] pb-[0.5rem] font-bold block ">Popular companies </h1>
      </div>

      <CompanyPopular />
      <Footer />
    </div>
  );
};

export default CompanyPage;
