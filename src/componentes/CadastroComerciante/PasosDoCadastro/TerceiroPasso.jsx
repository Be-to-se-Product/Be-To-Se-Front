import React from "react";

const TerceiroPasso = ({ formData, onNext,onBack, onFormChange })=>{

    const handleChange = (field, event) => {
        onFormChange(field, event.target.value);
        };
    return(
        <>
            <h3>Acesso : <br /> <br /></h3>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    E-mail:
                    </label>
                    <input
                    type="text"
                    id="email"
                    value={formData.email} onChange={(e)=>handleChange('email',e)}
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite seu email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="senha" className="block text-sm font-medium text-gray-600">
                    Senha:
                    </label>
                    <input
                    type="password"
                    id="senha"
                    value={formData.senha} onChange={(e)=>handleChange('senha',e)}
                    name="senha"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Digite sua senha"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-600">
                    Confirmar Senha :
                    </label>
                    <input
                    type="text"
                    id="confirmarSenha"
                    value={formData.confirmarSenha} onChange={(e)=>handleChange('confirmarSenha',e)}
                    name="confirmarSenha"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Confirme sua senha"
                    />
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
export default TerceiroPasso;