import './App.css';
import Departments from './components/Departments';
import Header from './components/Header';
import Scroll from './components/Scroll';


function App() {
 
  return (
    <div className="App">
      <Scroll/>
          <Header/>
          <Departments/>
    </div>
  );
}

export default App;
