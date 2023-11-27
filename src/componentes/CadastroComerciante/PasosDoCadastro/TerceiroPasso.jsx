import React from "react";
// Atribui-se a responsabilidade de enviar tudo para o BackEnd a partir desta tela, nesse sentido a responsabilidade única fica definida neste componente.
import axios from 'axios';



const TerceiroPasso = ({ formData, onNext , onBack, onFormChange })=>{
    const dadosTratados = {
        ...formData,
        email: formData.email.replace(/[.-]/g, ''),
        senha: formData.senha.replace(/[.-]/g, ''),
        confirmarSenha: formData.confirmarSenha.replace(/[.-]/g, ''),
    };
    const handleTesteConsoleLog = () => {
      // Trata os dados antes de enviá-los

      const dadosTratados = {
        ...formData,
        cpf: formData.cpf.replace(/[.-]/g, ''),
        cnpj: formData.cnpj.replace(/[.-//-]/g, ''),
        cep: formData.cep.replace(/[.-]/g, ''),
      }
      console.log('Dados tratados:', dadosTratados);
      };
    const enviarDadosParaBackend = async (formData) => {
        try {
          // Substitua 'sua_url_do_backend' pela URL real do seu backend
            const response = await axios.post('sua_url_do_backend', formData);

          // Faça algo com a resposta, se necessário
            console.log('Resposta do backend:', response.data);

          // Retorne a resposta, se necessário
        return response.data;
        } catch (error) {
          // Lida com erros durante a requisição
        console.error('Erro ao enviar dados para o backend:', error);
          throw error; // Você pode escolher lançar o erro novamente ou fazer algo diferente aqui
        }
    };

    const handleSubmit = async () => {
        try {
          // Chama a função de envio com os dados do formulário
            const resposta = await enviarDadosParaBackend(formData);

          // Faça algo com a resposta, se necessário
            console.log('Resposta da função de envio:', resposta);

          // Redirecione ou faça algo mais após o envio bem-sucedido
        } catch (error) {
          // Lida com erros durante o envio dos dados para o backend
            console.error('Erro ao enviar dados para o backend:', error);
          // Faça algo com o erro, se necessário
        }
    };

    const handleChange = (field, event) => {
        onFormChange(field, event.target.value);
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