import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Container, Forms } from "./style";

const NovoPlano: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [id] = useState(0);
  const [login, setLogin] = useState("");
  const [padrao] = useState(true);
  const [tipoMovimento] = useState("R");

  function handleNovoPlano(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const criaPlanoData = {
      descricao,
      id,
      login,
      padrao,
      tipoMovimento,
    };

    try {
      api
        .post("/lancamentos/planos-conta", criaPlanoData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          toast.success("Plano adicionado com Sucesso!");
        })
        .catch((e) => {
          toast.error("Ops, algo deu errado!");
        });
    } catch (e) {}
  }

  return (
    <>
      <Container>
        <h1>Crie seu novo plano de Conta</h1>

        <Forms onSubmit={handleNovoPlano}>
            
          <textarea
            placeholder="Descreva seu novo Plano de Conta"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            />
          <input
            type="text"
            placeholder="Digite seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />

          <button type="submit">Adicionar Plano</button>
        </Forms>
      </Container>
    </>
  );
};

export default NovoPlano;
