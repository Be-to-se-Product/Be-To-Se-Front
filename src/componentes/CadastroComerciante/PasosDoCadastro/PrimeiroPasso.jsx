import React from "react";

function PrimeiroPasso(){
    return(
        <>
            <form>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-600">
                    Nome:
                    </label>
                    <input
                    type="text"
                    id="nome"
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
                    name="cpf"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite seu cpf"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="cnpj" className="block text-sm font-medium text-gray-600">
                    CNPJ:
                    </label>
                    <input
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite seu cnpj"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="razao" className="block text-sm font-medium text-gray-600">
                    Razão Social:
                    </label>
                    <input
                    type="text"
                    id="razao"
                    name="razao"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite a razão social da empresa!"
                    />
                </div>
                <div className="w-100">
                <button
                    type="submit"
                    className="w-50 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                >
                    Cadastrar
                </button>
                <button
                    type="submit"
                    className="w-50 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                >
                    Cadastrar
                </button>
                </div>
            
            </form>
        </>
    )
}
export default PrimeiroPasso;