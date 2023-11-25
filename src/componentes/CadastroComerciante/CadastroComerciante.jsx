import React,{ useState } from "react";
// Informações abaixo importadas do Header
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
// import BreadCrumbCadastroCliente from "./Breadcrumbs/BreadCrumbCadastroCliente";
import Breadcrumb from "./Breadcrumbs/Breadcrumb";
import PrimeiroPasso from "./PasosDoCadastro/PrimeiroPasso";
import SegundoPasso from "./PasosDoCadastro/SegundoPasso";
import TerceiroPasso from "./PasosDoCadastro/TerceiroPasso";

const CadastroComerciante = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        cnpj: '',
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
        concordouTermos: false,
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
        };
    const handleBack = () => {
        // Certifique-se de não ir abaixo de 0 no currentStep
        setCurrentStep(Math.max(currentStep - 1, 0));
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
        <div className=" flex flex-col items-center justify-center">

        <NavbarRoot.Content>
            <NavbarRoot.Menu>
                <NavbarRoot.Item></NavbarRoot.Item>
            </NavbarRoot.Menu>
        </NavbarRoot.Content>
        
            <div className="m-6 bg-white p-10 rounded shadow-md w-100 mx-auto">
                {/* <BreadCrumbCadastroCliente /> */}
                <Breadcrumb steps={[1, 2, 3]} currentStep={currentStep} />
                <h2 className="text-2xl font-semibold mb-4">Cadastro de Comerciante</h2>
                {/* Formulário de Cadastro */}
                {currentStep === 0 && <PrimeiroPasso formData={formData} onNext={handleNext} onFormChange={handleFormChange} />}
                {currentStep === 1 && <SegundoPasso formData={formData} onNext={handleNext} onBack={handleBack} onFormChange={handleFormChange} />}
                {currentStep === 2 && <TerceiroPasso formData={formData} onNext={handleNext} onBack={handleBack} onFormChange={handleFormChange}  />}
                {currentStep === 3 && <UltimoPasso formData={formData} onNext={handleNext} onFormChange={handleFormChange} />}
                
        </div>
    </div>

        </>
    )
}
export default CadastroComerciante;