
const card = (props) => {
  return (
    <div className="Card">
        <img src={props.src} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Age : {props.age}</button>
      </div>
  )
}

export default card
