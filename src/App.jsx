import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Page/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import CompanyPage from "./Page/CompanyPage";
import SignInPage from "./Page/SignInPage";
import ResgisterPage from "./Page/ResgisterPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companypage" element={<CompanyPage />} />
          <Route path="/loginpage" element={<SignInPage />} />
          <Route path="/registerpage" element={<ResgisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
