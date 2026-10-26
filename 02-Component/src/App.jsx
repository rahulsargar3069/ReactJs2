
import Nvabar from "./components/Nvabar";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Rahul Sargar" age={23} src="https://plus.unsplash.com/premium_photo-1682125139523-92d7def89cd1?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      <Card user="Kashiling Sargar" age={21} src="https://plus.unsplash.com/premium_photo-1682125205118-d0af1b3ec1c2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      <Card user="Maruti Sargar" age={47} src="https://plus.unsplash.com/premium_photo-1682125191965-80aef56da033?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user="Manisha Sargar" age={38} src="https://plus.unsplash.com/premium_photo-1682125169807-351f1561a2ec?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
    </div>
  )
}

export default App
