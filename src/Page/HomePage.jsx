import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Search from "../Components/SearchDiv/Search";
import Jobs from "../Components/JobDiv/Jobs";
import Value from "../Components/ValueDiv/Value";
import Footer from "../Components/FooterDiv/Footer";
import Jobscoba from "../Components/JobsCoba/Jobscoba";

const HomePage = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Search />
      <Jobs />
      <Jobscoba />
      <Value />
      <Footer />
    </div>
  );
};

export default HomePage;
