import { useState } from 'react';


function App() {
  const [contador, setContador] = useState(0);
  function decrementar() {
    setContador(contador - 1);
  }
  function reset() {
    setContador(0);
  }

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <>
      <h1>Contador:</h1>
      <h2>{contador}</h2>
      <button onClick={decrementar}>&lt; Contador</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementar}>&gt; Contador</button>





    </>
  );
}

export default App;
