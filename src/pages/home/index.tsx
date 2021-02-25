import React from 'react';
import Main from '../../components/home/main';
import Section01 from '../../components/home/section01';
import Section02 from '../../components/home/section02';
import Section03 from '../../components/home/section03';
import Section04 from '../../components/home/section04';
//import { toast } from 'react-toastify'
import { Container } from "./style";

const Home: React.FC = () => {
    return (
        <Container>
            <Main />
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />       
        </Container>
    );


}

export default Home;