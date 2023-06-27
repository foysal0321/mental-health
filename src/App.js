import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Games from './components/Games';

function App() {
  return (
    <div className="App">
     <Home />
     <Header />
     <Games />
    </div>
  );
}

export default App;
