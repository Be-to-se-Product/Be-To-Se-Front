
import IconClose from "@/assets/close.png";

const Close = ({...props}) => {
  return (
    <button className='w-10 h-10' {...props}>
        <img src={IconClose} alt="" />
    </button>
  )
}

export default Close