import { Children } from "react"


const ContentStepper = (props) => {
  return (
    <div className='after:w-11/12 flex  justify-between  relative   after:absolute   after:left-[8%]  after:h-[2px] w-full  after:bg-slate-950 after:top-5' >
      {props.children}
    </div>
  )
}

export default ContentStepper