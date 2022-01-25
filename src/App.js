import './App.css';
import MainPage from './components/main-page/MainPage';
import Scroll from './Scroll';
import Header from "./components/Header"
import Footer from './components/Footer';


function App() {
 
  return (
   <>
    <div className="App">
      <Scroll/>
      <Header id="redirect"> </Header>
        <MainPage/>
      <Footer/>
      <div  className="redirect-button">
      <a href="#redirect"><i className="fas fa-chevron-up"></i></a>
    </div>
    </div>
   </>
  );
}

export default App;
