import Cardright from "./Cardright"

const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex gap-6 rounded-4xl overflow-x-auto px-5 w-[68%] '>
      
      {props.User.map(function(elem , idx){
        return <Cardright key={idx} 
        id = {idx}
        img = {elem.img}
        tag = {elem.tag}
        color = {elem.color}
        />
      })}

    </div>
  )
}

export default RightContent
