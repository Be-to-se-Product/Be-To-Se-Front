import { useEffect, useState } from "react";
import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import api from "@/services/api/services";
import { descriptografar } from "@utils/Autheticated";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

function DadosUsuario() {
  injectStyle();
  const [consumidores, setConsumidores] = useState({});
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const getConsumidores = (id) => {
    toast.loading("Carregando...");
    api
      .get(`/consumidores/${id}`)
      .then((res) => {
        toast.dismiss();
        setConsumidores(res.data.length == 0 ? [] : res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        toast.dismiss();
      });
  };

  const atualizarConsumidor = () => {
    const loading = toast.loading("Carregando...");
    api
      .patch(`/consumidores/${userId}`, consumidores)
      .then(() => {
        toast.dismiss(loading);
        toast.success("Dados atualizados com sucesso!", { autoClose: 2000 });
        setTimeout(() => {
          navigate("/index");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        toast.dismiss(loading);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsumidores((prevConsumidores) => ({
      ...prevConsumidores,
      [name]: value,
    }));
  };

  useEffect(() => {
    const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
    const { id } = JSON.parse(userDetailsCrypt);
    setUserId(id);
    getConsumidores(id);
  }, []);

  return (
    <div>
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
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
      <main
        className="flex flex-col items-center gap-y-10 mx-auto"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div className="flex flex-col items-center gap-y-2 mt-4">
          <h2 className="text-2xl">Dados do usuário</h2>
          <div className="h-8 w-8 bg-orange-principal rounded-full"></div>
        </div>
        <div className="flex flex-col p-8 bg-white-principal w-max gap-y-4 rounded-lg drop-shadow-lg">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Nome Completo</label>
            <input
              name="nome"
              className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
              type="text"
              value={consumidores.nome}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Email</label>
            <input
              name="email"
              className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
              type="email"
              value={consumidores.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">CPF</label>
              <input
                name="cpf"
                type="text"
                className="w-80 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                value={consumidores.cpf}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Gênero</label>
              <select
                name="genero"
                id=""
                className="w-36 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                value={consumidores.genero}
                onChange={handleChange}
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Data de Nascimento</label>
              <input
                name="dataNascimento"
                type="date"
                className="px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                value={consumidores.dataNascimento}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Telefone</label>
              <input
                name="celular"
                type="text"
                className="px-4 py-2 w-48 rounded-lg border-solid border-2 border-stroke-principal"
                value={consumidores.celular}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <button
            className="font-medium px-14 py-2 bg-orange_opacity-principal rounded-lg"
            onClick={() => navigate("/index")}
          >
            Cancelar
          </button>
          <button
            className="font-medium px-14 py-2 bg-orange-principal rounded-lg"
            onClick={atualizarConsumidor}
          >
            Salvar
          </button>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}
export default DadosUsuario;
