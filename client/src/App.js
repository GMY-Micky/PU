import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import ErrorPage from "./components/error-page/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImagePreview from "./components/image-preview/ImagePreview";

function App() {
  return (
    <>
      <div className="App" id="redirect">
        <Router>
          <Header />
          <ScrollButton />
          <Routes>
            <Route exect path="/" element={<MainPage />} />
            <Route exect path="/gallery/:id" element={<ImagePreview />} />
            <Route exect path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
