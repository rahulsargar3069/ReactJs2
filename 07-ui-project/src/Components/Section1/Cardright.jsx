import CardContent from "./CardContent";

const Cardright = (props) => {
  return (
    <div className='h-full w-[36%] relative bg-amber-200 shrink-0 rounded-4xl overflow-hidden '>
       <img src={props.img} alt="" className='h-full w-full object-cover ' />
       <CardContent tag = {props.tag} id = {props.id} color = {props.color}/>
    </div>
  )
}

export default Cardright
