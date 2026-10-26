import Navbar from "./Navbar"
import Page1Content from "./Page1Content"

const Section1 = (props) => {
  return (
    <div className="h-screen">
      <Navbar />
      <Page1Content User={props.User}/>
    </div>
  )
}

export default Section1
