import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <img src="https://i.pinimg.com/1200x/e5/58/8d/e5588d0a5edfe4f876deb4439e71c273.jpg" alt="" />
        <h3>Tools</h3>
      </div>
      <div className="nav2">
        <h3>Pricing</h3>
        <h3>Features</h3>
        <h3>Contact</h3>
      </div>
      <div className="nav3">
        <button className="btn1">Sign Up</button>
        <button className="btn2">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
