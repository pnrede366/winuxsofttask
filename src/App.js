import { useState } from 'react';
import './App.css';
import Progressbar from './Components/Progressbar';
import Rangenum from './Components/Rangenum';
import Weather from './Weather';

function App() {
  // const [percent, setpercent] = useState(0);

  return (
    <div className='d-flex justify-content-center'>
  
   <Rangenum/>

    </div>
  );
}

export default App;
