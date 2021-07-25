import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dataDialogsJs from './data';
//debugger;
//--------------------My test start
// let dataDialogsJs =[
//     {id: '1', name: 'Leonid'},
//     {id: '2', name: 'Alexey dfg'},
//     {id: '3', name: 'Diana'},
//     {id: '4', name: 'Bob'},
//     {id: '5', name: 'Scruge'}
// ];

console.log('dataDialogsJs= '+dataDialogsJs);
//debugger;

let a=dataDialogsJs.map(el =>[el.id, el.name])
// -/-------------------My test end

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <App a={a}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
