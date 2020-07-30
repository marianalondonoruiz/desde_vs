import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="p-3 mb-2 bg-white text-dark">
        
        
        <table className="table table-bordered">
  <thead>
  <tr>
  <th colspan="5" className="table-primary">TECHNOLOGY ABAD - INTEGRANTES DEL PPI</th>
</tr>
  <tr>
      <th className="table-warning"></th>
      <th className="table-warning">Nombre</th>
      <th className="table-warning">Apellidos</th>
      <th className="table-warning">Correo</th>
      <th className="table-warning">Celular</th>
    </tr>
  </thead>

  <tbody>
  
    <tr>
    
      <th className="table-warning">1</th>
      <td className="table-active" >Cristian Alexander</td>
      <td className="table-active">Manjarres Jaramillo</td>
      <td className="table-active">cmanjarres920@gmail.com</td>
      <td className="table-active">3045364176</td>
    </tr>
    <tr>
  
      <th className="table-warning">2</th>
      <td className="table-active">Mariana</td>
      <td className="table-active">Londoño Ruiz</td>
      <td className="table-active">marilondonor@gmail.com</td>
      <td className="table-active">3046490122</td>
    </tr>
  </tbody>
</table>
</div>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
