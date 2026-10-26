import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(1);

  function increaseNum(){
    setNum(num+1);
  } 
  function decreaseNum(){
    setNum(num-1);
  }
function incBy2Num(){
    setNum(num+2);
  }
  return (
    <div className='div'>
      <h1>{num}</h1>
      <div>
      <button onClick={increaseNum}>Increase + </button>
      <button onClick={decreaseNum}>Decrease - </button>
      <button onClick={incBy2Num}>Increase +2 </button>

      </div>
    </div>
  )
}

export default App
