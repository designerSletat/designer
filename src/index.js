import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {BrowserRouter} from 'react-router-dom';



let renderDom = () => {

ReactDOM.render(
    
<BrowserRouter> 
   
         <App />
     
</BrowserRouter>, document.getElementById('root'));
};

renderDom();

export default renderDom();