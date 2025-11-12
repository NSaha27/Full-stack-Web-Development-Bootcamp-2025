import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold text-gray-900 bg-amber-500 p-4"> Hello world! </h1>
    </>
  );
}

export default App
