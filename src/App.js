import logo from './logo.svg';
import './App.css';

function Componente1() {
  const practica = {
    curso:"REACT",
    fecha:"20 de mayo"
}

const {curso, fecha} = practica
  return (
    <div>

      <h1> Mi curso es:{curso}</h1>
      <h2> Inicia el dia:{fecha}</h2>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Componente1></Componente1>
    </div>
   
  );
}

export default App;
