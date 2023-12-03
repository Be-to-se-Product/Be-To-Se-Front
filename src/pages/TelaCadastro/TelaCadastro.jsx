import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import logo from "../../assets/logoEasyFind.png";
import ButtonCadastro from "./componentes/ButtonCadastro";

const TelaCadastro = () => {
    const closeModal = () => {
        setIsVisibleModal(false);
    }

    const openModal = (tipo, id) => {
        setIsVisibleModal(true);
        changeModal(tipo, id);
    }

    const changeModal = (modal, id) => {
        switch (modal) {
            case "aba1":
                setStateForm(
                    <Form01
                        key={state}
                        setState={setState}
                        fecharModal={closeModal}
                        getProdutos={getProdutos}
                    />
                );
                break;
            case "aba2":
                setStateForm(
                    <Form02
                        fecharModal={closeModal}
                        produto={produtos.find((produto) => produto.id === id)}
                        getProdutos={getProdutos}
                    />
                );
                break;
        }
    }

    return (
        <div className="bg-[#EAEAEA] overflow-hidden max-h-screen">
            <NavbarRoot.Content>
                <NavbarRoot.Menu>
                    <NavbarRoot.Item></NavbarRoot.Item>
                </NavbarRoot.Menu>
            </NavbarRoot.Content>
            <div className="h-screen flex justify-center items-center">
                <div className="py-10 gap-12 rounded-lg mb-40 flex flex-col items-center w-1/4 bg-black-100">
                    <p className="text-2xl">Cadastro de Usuário</p>
                    {/* <div className="flex flex-col gap-6 items-center w-full">
                        <ButtonCadastro nome="Sou Comerciante"/>
                        <ButtonCadastro nome="Sou Consumidor"/>
                    </div> */}
                    <div className="flex flex-col gap-6 items-center w-full">
                        <ButtonCadastro nome="Continuar com Google"/>
                        <ButtonCadastro nome="Cadastrar com E-mail"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaCadastro

