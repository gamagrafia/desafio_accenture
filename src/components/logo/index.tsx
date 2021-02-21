import React from 'react';

import logoImg from '../../img/logo.png';
import { LogoImg } from './styles';

// import { Container } from './styles';

const Logo: React.FC = () => {
  return (
      <LogoImg src={logoImg} />
  )
}

export default Logo;