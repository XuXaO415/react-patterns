import React, { useState } from "react";

function SimpleCounter() {
  const [num, setNum] = useState(0);
  // console.log("Running again! Num is:", num);

  const clickUp = () => {
    setNum(n => n + 1);
  }
  const clickUp2 =() => {
    setNum(n => n + 2);
  
  }

  return (
    <div>
      <h3> Count: {num} </h3> 
      <button onClick={clickUp}> Up </button>
      <button onClick={clickUp2}> Up by 2 </button>
    </div>
  );
}

export default SimpleCounter;
