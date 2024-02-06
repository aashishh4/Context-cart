import logo from './logo.svg';
import './App.css';
import Rout from './Component/Rout';
import Home from './incriment/Home';
import { CounterProvider } from './incriment/AuthContext';


function App() {
  return (
    <div className="App">
   < CounterProvider>
      <Home/>
      </CounterProvider>
    
    </div>
  );
}

export default App;
