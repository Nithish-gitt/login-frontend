import logo from './logo.svg';
import './App.css';
import App1 from './login-demo';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < BrowserRouter>
        <App1 />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
