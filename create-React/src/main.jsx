import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/Home';
import User from './containers/Users';
import GlobalStyle from './styles/globalStyle';

ReactDOM.createRoot( document.getElementById('root')).render(
<React.StrictMode>
    <Home /> <User/><GlobalStyle/>,
    </React.StrictMode>,
  
  );
