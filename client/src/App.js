import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import ErrorPage from "./components/error-page/ErrorPage";
import History from "./components/history/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImagePreview from "./components/image-preview/ImagePreview";
import CSdepartment from "./components/departments/CS-department/CSdepartment";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div id="redirect">
            <Header />
          </div>
          <ScrollButton />
          <Routes>
            <Route exect path="/" element={<MainPage />} />
            <Route path="/gallery/:id" element={<ImagePreview />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/fcit-history" element={<History />} />
            <Route
              path="/department-of-computer-science"
              element={<CSdepartment />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
