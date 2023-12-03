import React from "react";

const SegundoPasso = ({ formData, onNext,onBack, onFormChange })=>{
    const formatCEP = (value) => {
        // Remove caracteres não numéricos
        const onlyNumbers = value.replace(/[^\d]/g, '');

        // Formatação dinâmica enquanto o usuário digita
        if (onlyNumbers.length <= 5) {
            return onlyNumbers;
        } else {
            return `${onlyNumbers.slice(0, 5)}-${onlyNumbers.slice(5,8)}`;
        }
        };

    const handleChange = (field, event) => {
        onFormChange(field, event.target.value);
        };
    return(
        <>
            <h3>Endereço : <br /> <br /></h3>
            <form>
                <div className="flex flex-row justify-evenly gap-5 ">
                    <div className="mb-4">
                        <label htmlFor="cep" className="block text-sm font-medium text-gray-600">
                        CEP:
                        </label>
                        <input
                        type="text"
                        id="cep"
                        value={formatCEP(formData.cep)} onChange={(e)=>handleChange('cep',e)}
                        name="cep"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite seu cep"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="logradouro" className="block text-sm font-medium text-gray-600">
                        Logradouro:
                        </label>
                        <input
                        type="text"
                        id="logradouro"
                        value={formData.logradouro} onChange={(e)=>handleChange('logradouro',e)}
                        name="logradouro"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Av, Rua, etc..."
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-evenly gap-5 ">
                    <div className="mb-6">
                        <label htmlFor="numero" className="block text-sm font-medium text-gray-600">
                        Número:
                        </label>
                        <input
                        type="text"
                        id="numero"
                        value={formData.numero} onChange={(e)=>handleChange('numero',e)}
                        name="numero"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite o número do seu endereço"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="bairro" className="block text-sm font-medium text-gray-600">
                        Bairro:
                        </label>
                        <input
                        type="text"
                        id="bairro"
                        value={formData.bairro} onChange={(e)=>handleChange('bairro',e)}
                        name="bairro"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Digite o nome de seu bairro."
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-evenly gap-5 ">
                    <div className="mb-6">
                        <label htmlFor="cidade" className="block text-sm font-medium text-gray-600">
                        Cidade:
                        </label>
                        <input
                        type="text"
                        id="cidade"
                        value={formData.cidade} onChange={(e)=>handleChange('cidade',e)}
                        name="cidade"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Cidade "
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="estado" className="block text-sm font-medium text-gray-600">
                        Estado:
                        </label>
                        <input
                        type="text"
                        id="estado"
                        value={formData.estado} onChange={(e)=>handleChange('estado',e)}
                        name="estado"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Estado"
                        />
                    </div>
                </div>
                <div className="w-100 flex justify-between">

                    <button
                        type="submit"
                        className="w-100 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                        onClick={onBack}
                    >   
                        Voltar
                    </button>
                    <button
                        type="submit"
                        className="w-100 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                        onClick={onNext}
                    >   
                        Próximo
                    </button>
                
                </div>
            
            </form>
        </>
    )
}
export default SegundoPasso;