import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/devolp";
import FetchData from "./components/FetchData";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Business" element={<FetchData cat="Business"/>} />
          <Route exact path="/Entertainment" element={<FetchData cat="Entertainment"/>} />
          <Route exact path="/Health" element={<FetchData cat="Health"/>} />
          <Route exact path="/Science" element={<FetchData cat="Science"/>} />
          <Route exact path="/Sports" element={<FetchData cat="Sports"/>} />
          <Route exact path="/Technology" element={<FetchData cat="Technology"/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;