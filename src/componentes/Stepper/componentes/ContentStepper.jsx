

const ContentStepper = (props) => {
  return (
    <div className='w-[500px] flex  justify-between relative'>
        <div className='w-full left-2 h-1 absolute bg-orange-principal top-1/4'></div>
        {props.children}
        <NomeComponente/>
    </div>
  )
}

export default ContentStepper