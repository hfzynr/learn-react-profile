import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={`${process.env.PUBLIC_URL}/assets/img/1.jpeg`} className="App-logo rounded-circle" alt="logo" />

      <div className="jumbotron" id="jumbotron">
        <p>
          Nama saya Hafiz Yanuar Ibrahim  <br/>
          saya lulus dari SMK 1 Jakarta pada tahun 2017.
        </p>
        For more detail :
        <a className="App-link" href="https://github.com/hfzynr">
          Click Me !
        </a>
      </div>

      </header>
    </div>
  );
}

export default App;
