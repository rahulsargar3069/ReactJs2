import {RiBookmarkLine} from "@remixicon/react"; 

const Card = (props) => {
  return (
   <div className="Card">
      <div className="top">
        <img src={props.logo} alt="" />
        <button>Save <RiBookmarkLine  color="#666666" size="20px" /></button>
      </div>
      <div className="center">
        <h3> {props.company} <span>{props.date}</span></h3>
        <h2> {props.post} </h2>
        <div className="job">
          <h4>{props.post1}</h4>
          <h4>{props.post2}</h4>
        </div>
      </div>
       <hr />
      <div className="bottom">
        <div>
          <h4>{props.pay}</h4>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
    
  )
}

export default Card
