import {RiArrowRightLine} from "@remixicon/react";

const CardContent = (props) => {
  return (
    <div className='absolute inset-0 h-full w-full py-3 px-5 flex flex-col justify-between'>
        <h2 className='text-2xl bg-white text-black rounded-full h-10 w-10 flex justify-center align-middle pt-0.5 font-medium'>{props.id+1}</h2>
        <div className=' text-white'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, assumenda animi quas nemo doloremque autem!</p>
        <div className='flex mt-4'>
          <button style={{backgroundColor : props.color}} className='py-2 px-10  rounded-full text-white  font-medium text-1xl'>{props.tag}</button>
          <button style={{backgroundColor : props.color}} className='py-2 px-5  rounded-full text-white  font-medium text-1xl'><RiArrowRightLine /></button>
        </div>
        </div>
       </div>
  )
}

export default CardContent
