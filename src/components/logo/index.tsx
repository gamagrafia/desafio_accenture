import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../img/logo.png';
import { LogoImg } from './styles';

// import { Container } from './styles';

const Logo: React.FC = () => {
  return (
      <Link to="/">
        <LogoImg src={logoImg} />
      </Link>
  )
}

export default Logo;