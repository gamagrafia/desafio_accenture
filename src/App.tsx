import React from 'react';
<<<<<<< HEAD
import GlobalStyle from './style/style';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'

=======
>>>>>>> 7cad1faf199bd5033c36cc35791c19e9fee3d478

import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './style/global'



import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
<<<<<<< HEAD
          <Routes/>
      </BrowserRouter>
    <GlobalStyle/>
=======
      <Routes/>
    </BrowserRouter>
    <GlobalStyle />
>>>>>>> 7cad1faf199bd5033c36cc35791c19e9fee3d478
    
    </>
  );
}

export default App;