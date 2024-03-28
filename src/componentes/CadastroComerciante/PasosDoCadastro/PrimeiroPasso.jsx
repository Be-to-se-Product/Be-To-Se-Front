import React from "react";
import { ToastContainer, toast } from "react-toastify";


// A importação de outras funções pai foi definida no componente pai CadastroComerciante.jsx, na arrow function elas também poderão ser importadas...
// formData, onNext e onFormChange importadas da classe pai com atribuições diferentes da classe pai.
const PrimeiroPasso = ({ formData, onNext, onFormChange })=>{
    //Inclusão de máscaras para melhor exibição dos dados.
    const formatCPF = (value) => {
        // Remove caracteres não numéricos
        const onlyNumbers = value.replace(/[^\d]/g, '');

        // Formatação dinâmica enquanto o usuário digita
        if (onlyNumbers.length <= 3) {
            return onlyNumbers;
        } else if (onlyNumbers.length <= 6) {
            return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
        } else if (onlyNumbers.length <= 9) {
            return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6)}`;
        } else {
            return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9,11)}`;
        }
    };

    const aProsseguir = () =>{
        const mensagensErro = [];

        formData.nome === '' && mensagensErro.push('O campo nome não pode estar nulo ou vazio!');
        formData.cnpj === '' && mensagensErro.push('O campo do CNPJ não pode estar nulo ou vazio!');
        formData.razaoSocial === '' && mensagensErro.push('O campo de nome da Razão Social não pode estar nulo ou vazio!');

        if (mensagensErro.length > 0) {
            const mensagemErroFinal = mensagensErro.join(' ');
            toast.error(mensagemErroFinal);
        } else {
            onNext();
        }
    }

    const formatCNPJ = (value) => {
        // Remove caracteres não numéricos
        const onlyNumbers = value.replace(/[^\d]/g, '');

        // Formatação dinâmica enquanto o usuário digita
        if (onlyNumbers.length <= 2) {
            return onlyNumbers;
        } else if (onlyNumbers.length <= 5) {
            return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2)}`;
        } else if (onlyNumbers.length <= 8) {
            return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5)}`;
        } else if (onlyNumbers.length <= 12) {
            return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8)}`;
        } else {
            return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}-${onlyNumbers.slice(12,14)}`;
        }
    };

    const formatTelefone = (value) => {
        // Remove caracteres não numéricos
        const onlyNumbers = value.replace(/[^\d]/g, '');

        // Formatação dinâmica enquanto o usuário digita
        if (onlyNumbers.length <= 2) {
            return onlyNumbers;
        } else if (onlyNumbers.length <= 6) {
            return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
        } else if (onlyNumbers.length <= 10) {
            return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 6)}-${onlyNumbers.slice(6)}`;
        } else {
          // Você pode adicionar mais formatações conforme necessário
            return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 6)}-${onlyNumbers.slice(6, 11)}`;
        }
    };

    const handleChange = (field, event) => {
        onFormChange(field, event.target.value);
        };

    // const handleChangeCPF = (e) => {
    //     // Remover traços e pontos antes de chamar a função handleChange
    //     const valueSemMascara = e.target.value.replace(/[.-]/g, '');
    
    //     // Chama a função handleChange com o valor sem máscara
    //     handleChange('cpf', valueSemMascara);
    //     };

    return(
        <>
            <h3>Dados empresariais: <br /> <br /></h3>
            <form>
                {/* Primeira Div Relativa a primeira linha do formulário */}
                <div className="flex flex-row justify-evenly gap-5 ">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-600">
                        Nome:
                        </label>
                        <input
                        type="text"
                        id="nome"
                        value={formData.nome} onChange={(e)=>handleChange('nome',e)}
                        name="nome"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite seu nome"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-600">
                        CPF:
                        </label>
                        <input
                        type="text"
                        id="cpf"
                        value={formatCPF(formData.cpf)} onChange={(e)=>handleChange('cpf',e)}
                        name="cpf"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite seu CPF"
                        />
                    </div>
                </div>
                
                <div className="flex flex-row justify-evenly gap-5 ">
                    <div className="mb-6">
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-600">
                        CNPJ:
                        </label>
                        <input
                        type="text"
                        id="cnpj"
                        value={formatCNPJ(formData.cnpj)} onChange={(e)=>handleChange('cnpj',e)}
                        name="cnpj"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite o CNPJ da empresa"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-600">
                        Telefone / Celular:
                        </label>
                        <input
                        type="text"
                        id="telefone"
                        value={formatTelefone(formData.telefone)} onChange={(e)=>handleChange('telefone',e)}
                        name="telefone"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite o telefone da empresa"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="razao" className="block text-sm font-medium text-gray-600">
                    Razão Social:
                    </label>
                    <input
                    type="text"
                    id="razao"
                    name="razao"
                    value={formData.razaoSocial} onChange={(e)=>handleChange('razaoSocial',e)}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite a razão social da empresa!"
                    />
                </div>
                <div className="w-100 flex justify-end">
                    <button
                        type="button"
                        className="w-100 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                        onClick={aProsseguir}
                    >   
                        Próximo
                    </button>
                
                </div>
            <ToastContainer />
            </form>
        </>
    )
}
export default PrimeiroPasso;