
const BoxComerciante = (props) => {
  return (
    <section className={`w-full  text-2xl mx-auto  max-w-[950px] ${props.className} `}>
        {props.children}
    </section>
  )
}

export default BoxComerciante