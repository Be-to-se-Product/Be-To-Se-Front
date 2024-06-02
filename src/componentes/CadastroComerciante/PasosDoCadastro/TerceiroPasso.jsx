// Atribui-se a responsabilidade de enviar tudo para o BackEnd a partir desta tela, nesse sentido a responsabilidade única fica definida neste componente.

// import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validarEmail } from "@utils/validadores";
import { ToastContainer, toast } from "react-toastify";
import api from "@/services/api/services";
import { injectStyle } from "react-toastify/dist/inject-style";

const TerceiroPasso = ({ formData, onBack, onFormChange }) => {
  injectStyle();

  const navigate = useNavigate();
  const handleChange = (field, event) => {
    onFormChange(field, event.target.value);
  };
  const enviarDados = () => {
    const dadosTratados = {
      cnpj: formData.cnpj.replace(/[.-//-]/g, ""),
      nome: formData.nome,
      razaoSocial: formData.razaoSocial,
      usuarioCriacaoDTO: {
        email: formData.email,
        senha: formData.senha,
      },
      cep: formData.cep.replace(/[.-]/g, ""),
    };

    toast.loading("Realizando Cadastro...", { autoClose: 2000 });
    sessionStorage.clear();
    api
      .post(`/comerciantes`, dadosTratados)
      .then((response) => {
        toast.dismiss();
        toast.success("Cadastro realizado com sucesso!", { autoClose: 2000 });
        if (response.status == 201) {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(
          "Problema durante conexão com o servidor, tente novamente mais tarde!",
          { autoClose: 2000 }
        );

        if (error.response) {
          console.error("Erro no response:", error.response.data);
        } else {
          console.error("Erro desconhecido:", error.message);
        }
      });
  };

  const handleSubmit = () => {
    // Trata os dados antes de enviá-los

    const mensagensErro = [];

    !validarEmail(formData.email) && mensagensErro.push("Email invalido!");
    formData.senha !== formData.confirmarSenha &&
      mensagensErro.push("Senhas não coincidem, favor verificar!");
    (formData.senha.length < 8 || formData.senha.length > 40) &&
      mensagensErro.push(
        "O tamanho da senha deve estar entre 8 e 40 caracteres!"
      );

    if (mensagensErro.length > 0) {
      const mensagemErroFinal = mensagensErro.join(" ");
      toast.error(mensagemErroFinal);
    } else {
      toast.success("Enviando Formulário!");
      enviarDados();
    }
  };
  // Vamos inserir validação do toast aqui, isto irá impedir o processo de formatação para envio
  // if (!validarEmail(formData.email)){
  //   toast.error("Email Invalido!")
  //   }else if(formData.senha===formData.confirmarSenha){
  //     toast.success("Enviando Formulário!")
  //     // A função abaixo tem toda o tratamento de dados para Uma analogia de dto de envio um json base para envio
  //     enviarDados();
  //   }else{
  //     toast.error("Senhas não coincidem, favor verificar!")
  //   }

  // };

  // #### Renderização de Tela  #####
  return (
    <>
      <h3>
        Acesso : <br /> <br />
      </h3>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            E-mail:
          </label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e)}
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Digite seu email"
          />
        </div>
        {/* <div className="flex flex-row justify-evenly gap-5 "> */}
        <div className="mb-4">
          <label
            htmlFor="senha"
            className="block text-sm font-medium text-gray-600"
          >
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            value={formData.senha}
            onChange={(e) => handleChange("senha", e)}
            name="senha"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Digite sua senha"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmarSenha"
            className="block text-sm font-medium text-gray-600"
          >
            Confirmar Senha :
          </label>
          <input
            type="password"
            id="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={(e) => handleChange("confirmarSenha", e)}
            name="confirmarSenha"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Confirme sua senha"
          />
        </div>
        {/* </div> */}
        {/* <div className="mb-6">
                    <label htmlFor="aceitarTermos" className="block text-sm font-medium text-gray-600">
                    Termo de aceite :
                    </label>
                    <input
                      type="checkbox"
                      id="concordouTermos"
                      checked={formData.concordouTermos}
                      onChange={(e) => handleChange('concordouTermos', e)}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-600">Estou de acordo com os <a href="">termos de uso</a> da aplicação!</span>
                </div> */}

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
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};
export default TerceiroPasso;
