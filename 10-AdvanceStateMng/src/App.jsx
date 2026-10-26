import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  const incBtn = () => {
    setNum(num+1);
  }
  const decBtn = () =>{
    setNum(num-2);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incBtn}>Increase + </button>
      <button onClick={decBtn}>Decrease - </button>

    </div>
  )
}

export default App


