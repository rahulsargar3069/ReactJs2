import { useState } from "react"

const App = () => {

  
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandling = (e) => {
    e.preventDefault()

    //task arr -> copytask arr
    const copyTask = [...task];
    //copytask mai task arr ko copy or push
    copyTask.push({title,detail});
    setTask(copyTask);
    
    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='lg:flex lg:flex-row bg-black'>
     <form 
     onSubmit={(e)=>{
      submitHandling(e)
     }}
     className='flex flex-col lg:h-screen py-10 px-10 gap-2 lg:w-[50%] text-white lg:border-r-2'>
      <h1 className='font-medium text-3xl'>Add Notes</h1>
      <input 
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      type="text" placeholder="Enter Heading"
      className="border-2 py-2 px-3 font-medium text-2xl rounded outline-none"/>
      <textarea 
       value={detail}
       onChange={(e)=>{
        setDetail(e.target.value);
       }}
      type="text" placeholder="Enter Details" 
      className="border-2 h-40 px-2 text-2xl py-2 font-medium rounded outline-none"/>
      <button className="bg-white text-black font-medium py-2 px-3 text-2xl rounded cursor-pointer active:scale-90">Enter</button>
 
     </form>
     <div className=' lg:h-screen lg:w-[50%] px-10 py-10'>
      <div className='lg:h-full '>
        <h1 className='font-medium text-3xl text-white '>Recents Notes</h1>
        <div className='flex flex-wrap gap-4 h-full overflow-auto'>
          {task.map(function(elem , idx ){

          return <div key={idx} className='h-50 w-40 bg-cover pt-7 px-4 bg-[url(https://i.pinimg.com/originals/ff/80/b0/ff80b0f0bf8ff73e30e4b31bc2948dc2.png)] rounded-2xl mt-5 flex flex-col justify-between pb-3'>
            <div>
              <h3 className='font-bold text-3xl'>{elem.title}</h3>
            <p className='font-medium text-gray-600'>{elem.detail}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)}} className='bg-red-500 py-1 px-5 rounded text-white font-medium active:scale-90'>Delete</button>
          </div>
         })}
          
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
