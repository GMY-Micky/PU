import './App.css';
import MainPage from './components/main-page/MainPage';
import Scroll from './Scroll';
import Header from "./components/Header"
import Footer from './components/Footer';


function App() {
 
  return (
    <div className="App">
      <Scroll/>
      <Header/>
        <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
