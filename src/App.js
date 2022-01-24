import './App.css';
import MainPage from './components/main-page/MainPage';
import Scroll from './Scroll';
import Header from "./components/Header"


function App() {
 
  return (
    <div className="App">
      <Scroll/>
      <Header/>
        <MainPage/>
    </div>
  );
}

export default App;
