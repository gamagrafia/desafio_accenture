import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../components/logo';
import { Error, ErrorContainer } from './style';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Logo />
      <ErrorContainer>
        <Error>
          <BsExclamationTriangle size={90} style={{ color: "#8C52E5" }} />
          <h3>Oops, algo deu errado!Confime seus dados e tente novamente!</h3>
          <Link to="/login">Voltar < FiArrowLeft /></Link>
        </Error>
      </ErrorContainer>
    </>
  );
}

export default ErrorPage;