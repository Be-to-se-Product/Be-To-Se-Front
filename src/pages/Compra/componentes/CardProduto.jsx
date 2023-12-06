function CardProduto(props){
    const{quantidade, preco}=props;
    const valorFinal = quantidade * preco;

    return (
        <div className='flex flex-row items-center justify-between gap-x-16 px-14 py-4'>
            <div className="flex flex-row gap-x-16 items-center">
                <div className='h-20 w-20 bg-orange-principal'></div>
                <div className='flex flex-col items-start'>
                    <p>{props.nome}</p>
                </div>
            </div>
            <div className="flex flex-row gap-x-16">
                <div className='flex flex-row justify-center items-center gap-x-8'>
                    <p>{props.quantidade}</p>
                </div>
                <p className="flex w-20">R$ {valorFinal}</p>
            </div>
        </div>
    )
}
export default CardProduto;