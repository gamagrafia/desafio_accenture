import React from "react";
import { Container, LinkSections } from "./style";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardLogin: React.FC = () => {
  return (
    <Container>
      <h1>Faça seu Login</h1>
      <input type="text" id="username" placeholder="Digite seu usuário" />
      <input type="password" id="passlogin" placeholder="Digite sua senha" />
      <button type="submit">
        Continuar <FiArrowRight size={25} />
      </button>
      <LinkSections>
        <Link to="/">
        Esqueci minha senha <FiChevronRight size={20} /> 
        </Link>
        <br />
        <Link to="/">
        Ainda não sou cliente <FiChevronRight size={20} /> 
        </Link>
      </LinkSections>
    </Container>
  );
};

export default CardLogin;
