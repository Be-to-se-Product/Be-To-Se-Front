import React,{ useState } from "react";
// Informações abaixo importadas do Header
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
// import BreadCrumbCadastroCliente from "./Breadcrumbs/BreadCrumbCadastroCliente";
import Breadcrumb from "../../componentes/CadastroComerciante/Breadcrumbs/Breadcrumb";
// Informações abaixo essenciais para renderização dos componentes de cadastro
import PrimeiroPasso from "../../componentes/CadastroComerciante/PasosDoCadastro/PrimeiroPasso";
import SegundoPasso from "../../componentes/CadastroComerciante/PasosDoCadastro/SegundoPasso";
import TerceiroPasso from "../../componentes/CadastroComerciante/PasosDoCadastro/TerceiroPasso";

const CadastroComerciante = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        cnpj: '',
        cpf:'',
        razaoSocial: '',
        telefone: '',
        tipoEmpresa: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        concordouTermos: '',
    });
    // "DTO para envio de dados ao BackEnd"
    const [dadosTratados, setDadosTratados] = useState({
        cnpj: '',
        nome: '',
        razaoSocial: '',
        usuarioCriacaoDTO: {
            email: '',
            senha: '',
        },
        cep: '',
        });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);

        const dadosTratados = {
            cnpj: formData.cnpj.replace(/[.-//-]/g, ''),
            nome: formData.nome,
            razaoSocial: formData.razaoSocial,
            usuarioCriacaoDTO: {
                email: formData.email,
                senha: formData.senha,
            },
            cep: formData.cep.replace(/[.-]/g, ''),
            };
         
        };

    const handleBack = () => {
        // Certifique-se de não ir abaixo de 0 no currentStep
        setCurrentStep(Math.max(currentStep - 1, 0));
        const dadosTratados = {
            cnpj: formData.cnpj.replace(/[.-//-]/g, ''),
            nome: formData.nome,
            razaoSocial: formData.razaoSocial,
            usuarioCriacaoDTO: {
                email: formData.email,
                senha: formData.senha,
            },
            cep: formData.cep.replace(/[.-]/g, ''),
            };
        };
        
    
        const handleFormChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    return (
    <>
        {/* Div pai que organiza todos os conteúdos na vertical, como é possível ver no className Tailwind */}
        <div className="flex flex-col items-center justify-between h-screen bg-black-300 ">

            <NavbarRoot.Content>
            <NavbarRoot.ContentTop>
                <NavbarRoot.Logo/>
                <NavbarRoot.Pesquisa/>
                {/* {sessionStorage.USERDETAILS ? (<NavbarRoot.Authenticated/>) : (<NavbarRoot.Sign/>)} */}

            </NavbarRoot.ContentTop>
            <NavbarRoot.Menu>
                <NavbarRoot.Item></NavbarRoot.Item>
            </NavbarRoot.Menu>
            </NavbarRoot.Content>
            
                <div style={{ backgroundColor: "#FFFFFF" }} className="m-6 mb-20  p-10 rounded shadow-md w-100 mx-auto">
                    {/* <BreadCrumbCadastroCliente /> */}
                    <Breadcrumb steps={[1, 2, 3]} currentStep={currentStep} />
                    <h2 className="text-2xl font-semibold mb-4">Cadastro de Comerciante</h2>
                    {/* Formulário de Cadastro */}
                    {currentStep === 0 && <PrimeiroPasso formData={formData} onNext={handleNext} onFormChange={handleFormChange} />}
                    {currentStep === 1 && <SegundoPasso formData={formData} onNext={handleNext} onBack={handleBack} onFormChange={handleFormChange} />}
                    {currentStep === 2 && <TerceiroPasso formData={formData} onNext={handleNext} onBack={handleBack} onFormChange={handleFormChange}  />}
                    
                    
                </div>
        </div>

    </>
    )
}
export default CadastroComerciante;