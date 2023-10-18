import react from "react";

const CardLoja = (props) => {
    return (
        <div className="flex flex-col w-[275px] h-full bg-white-principa gap-16 justify-center items-center">

            <div className="flex flex-col justify-center items-center gap-9 w-[271px] h-[97px]  bg-cover bg-[url('https://mercadoeconsumo.com.br/wp-content/uploads/2021/02/Fast-Shop-entrega-73-das-compras-online-em-ate-duas-horas-e1691695903443.jpg')] ">
                <div className="flex w-[80px] h-[80px] bg-cover  bg-[url('https://fastshopwr-a.akamaihd.net/assets/images/fast-shop.jpg')]">

                </div>
            </div>

            <div className="flex w-auto h-auto gap-9 justify-center ">
                <p className="flex text-center text-3xl items-center">
                    Fast Shop
                </p>
            </div>

            <div className="flex w-auto h-auto gap-6 justify-center  items-start">
                <div className="flex w-[70px] h-[70px] bg-center bg-cover bg-[url('https://img.freepik.com/fotos-gratis/fone-de-ouvido-preto-dispositivo-digital_53876-96805.jpg?w=826&t=st=1697412466~exp=1697413066~hmac=307879540b4fb0e8251d2488beb28a3f8a7cb954969901409ace74addcb4b643')] rounded-md"></div>
                <div className="flex w-[70px] h-[70px] bg-center bg-cover bg-[url('https://img.freepik.com/fotos-gratis/mao-de-motociclista-tatuada-segurando-travas-de-madeira-com-camisetas-em-branco-preto-e-branco-de-algodao-fino-premium-isolado-no-branco_346278-1811.jpg?w=740&t=st=1697412604~exp=1697413204~hmac=f79e2e06215f0e4efd7ca40d0ac5cddd6d4d9df178f33d4283a047c986c87574')] rounded-md"></div>
                <div className="flex w-[70px] h-[70px] bg-center bg-cover bg-[url('https://img.freepik.com/fotos-gratis/chaleira-e-copo-no-fundo-da-parede_1339-7171.jpg?w=1060&t=st=1697412707~exp=1697413307~hmac=042bf516e56ea274e11f1a80c117e34b3fbaef7002e50754821940104fc36d0e')] rounded-md"></div>
            </div>

        </div>
    )
}
export default CardLoja;