

const ContentStepper = (props) => {
  return (
    <div className='w-[650px] flex  justify-between  relative   after:absolute  after:w-[440px] after:translate-x-[120px]   after:h-[2px]  after:bg-slate-950 after:top-5'>
        {props.children}
    </div>
  )
}

export default ContentStepper