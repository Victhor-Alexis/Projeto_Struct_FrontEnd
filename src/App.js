import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import "./global.css"

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
