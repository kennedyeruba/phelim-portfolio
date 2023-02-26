import './App.css';
import Nav from './pages/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <div className="app-main">
        <About/>
      </div>
    </div>
  );
}

export default App;
