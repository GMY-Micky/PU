import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import ErrorPage from "./components/error-page/ErrorPage";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const obj = { image: "added successfully" };
    axios.post("http://localhost:3001/", obj);

    setTimeout(() => {
      axios.get("http://localhost:3001/gallery/").then((response) => {
        console.log(response.data);
      });
    }, 2000);
  }, []);

  return (
    <>
      <div className="App" id="redirect">
        <Router>
          <Header />
          <ScrollButton />
          <Routes>
            <Route exect path="/" element={<MainPage />} />
            <Route exect path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
