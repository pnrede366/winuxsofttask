import React, { useState } from 'react';
import Progressbar from './Progressbar';

const Rangenum = () => {
    const [range, setrange] = useState(75*1.8);

  return <div >
   <Progressbar percent={range}/>

<div >
  <input type="range"  min={0} max={100}  onChange={(e)=>setrange((e.target.value*1.8))} />
   <h4>{(parseInt(range)/1.8).toFixed(0)}</h4>
  </div>
  </div>;
};

export default Rangenum;
