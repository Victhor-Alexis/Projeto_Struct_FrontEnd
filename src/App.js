import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import "./global.css"
import { DynimicityProvider } from './Context/useDynimicityContext';


function App() {
  return (
    <BrowserRouter>
      <DynimicityProvider>
        <Routes/>
      </DynimicityProvider>
    </BrowserRouter>
  );
}

export default App;
