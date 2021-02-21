import React from 'react';
import GlobalStyle from './style/style';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'




const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    <GlobalStyle/>
    
    </>     
  );
}

export default App;