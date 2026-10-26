
const App = () => {

  function onClickBtn(){
    console.log("Happy....");
  }
  return (
    <div>
      <button onClick={onClickBtn}>Click Me</button>
    </div>
  )
}

export default App
