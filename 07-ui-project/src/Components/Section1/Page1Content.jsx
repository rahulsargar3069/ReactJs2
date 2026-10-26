import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className='h-[85vh] py-10 px-10 flex justify-between ' >
        <LeftContent />
        <RightContent User={props.User}/>
    </div>
  )
}

export default Page1Content
