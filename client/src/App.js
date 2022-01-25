import "./App.css";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/error-page/ErrorPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
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
