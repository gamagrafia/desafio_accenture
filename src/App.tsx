import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './style/global'



import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle />
    
    </>
  );
}

export default App;