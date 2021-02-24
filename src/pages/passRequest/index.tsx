import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container } from '../../components/cardLogin/style';
import { ContainerPassRequest } from './style';

// import { Container } from './styles';

const PassRequest: React.FC = () => {
    return (
        <ContainerPassRequest>
            <Container>
            <h1>Solicitar nova Senha</h1>
            <input type="text" placeholder="Digite seu email" />
            <input type="text"  placeholder="Digite seu nome de usuário" />
            <button type="submit">
                Continuar <FiArrowRight size={25} />
            </button>
            
            </Container>
        </ContainerPassRequest>
    )
}

export default PassRequest;