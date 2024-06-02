import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import Breadcrumb from "@componentes/CadastroComerciante/Breadcrumbs/Breadcrumb";
import PrimeiroPasso from "@componentes/CadastroComerciante/PasosDoCadastro/PrimeiroPasso";
import SegundoPasso from "@componentes/CadastroComerciante/PasosDoCadastro/SegundoPasso";
import TerceiroPasso from "@componentes/CadastroComerciante/PasosDoCadastro/TerceiroPasso";
import { useState } from "react";

const CadastroComerciante = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    cnpj: "",
    cpf: "",
    razaoSocial: "",
    telefone: "",
    tipoEmpresa: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    concordouTermos: "",
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="h-screen">
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
          <NavbarRoot.Pesquisa />
          {sessionStorage.USERDETAILS ? (
            <NavbarRoot.Authenticated />
          ) : (
            <NavbarRoot.Sign />
          )}
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>
      <div className="flex flex-col items-center h-full bg-black-300 ">
        <div className="bg-[#fff] p-10 mt-28 rounded-lg shadow-md w-100  ">
          <Breadcrumb steps={[1, 2, 3]} currentStep={currentStep} />
          <h2 className="text-2xl font-semibold mb-4">
            Cadastro de Comerciante
          </h2>
          {currentStep === 0 && (
            <PrimeiroPasso
              formData={formData}
              onNext={handleNext}
              onFormChange={handleFormChange}
            />
          )}
          {currentStep === 1 && (
            <SegundoPasso
              formData={formData}
              onNext={handleNext}
              onBack={handleBack}
              onFormChange={handleFormChange}
            />
          )}
          {currentStep === 2 && (
            <TerceiroPasso
              formData={formData}
              onNext={handleNext}
              onBack={handleBack}
              onFormChange={handleFormChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default CadastroComerciante;
