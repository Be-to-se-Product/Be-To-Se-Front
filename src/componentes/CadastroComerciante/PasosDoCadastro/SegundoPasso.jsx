import React from "react";

function SegundoPasso(){
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email:
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite seu email"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="senha" className="block text-sm font-medium text-gray-600">
                    Senha:
                    </label>
                    <input
                    type="password"
                    id="senha"
                    name="senha"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite sua senha"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Cadastrar
                </button>
            
            </form>
        </>
    )
}
export default SegundoPasso;