import "../Card/Card.css";

const Card = (props) => {
  return (
   <div className="card">
      <img src={props.logo} alt="" />
      <h2>{props.job}</h2>
      <p>{props.description}</p>
      <button>Apply For Job</button>
    </div>
  )
}

export default Card
