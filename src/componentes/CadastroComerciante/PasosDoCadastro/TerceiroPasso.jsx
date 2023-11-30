import React from "react";
// Atribui-se a responsabilidade de enviar tudo para o BackEnd a partir desta tela, nesse sentido a responsabilidade única fica definida neste componente.

import api from "../../../services/api";
// import { ToastContainer, toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";



const TerceiroPasso = ({ formData, onNext , onBack, onFormChange })=>{
  // injectStyle();

  const navigate = useNavigate();
  const handleChange = (field, event) => {
      onFormChange(field, event.target.value);
      };


    const handleTesteConsoleLog = () => {
      // Trata os dados antes de enviá-los 
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
        console.log('Dados tratados:', dadosTratados);

      // const loading = toast.loading("Realizando Cadastro...");
    sessionStorage.clear();
    api
      .post(`/comerciantes`, dadosTratados)
      .then((response) => {
        if (response.status == 201) {
          // sessionStorage.setItem("USERDETAILS", criptografar(JSON.stringify(response.data)));
          
          setTimeout(() => {
            navigate("/index");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error('Erro no response:', error.response.data);
        } else {
          console.error('Erro desconhecido:', error.message);
        }


  });



      };

            // #### Renderização de Tela  #####
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
                    type="password"
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
                        type="button"
                        className="w-100 text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all undefined"
                        onClick={handleTesteConsoleLog}
                    >   
                        Enviar
                    </button>
                
                </div>
            
            </form>
        </>
    )
}
export default TerceiroPasso;