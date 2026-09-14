import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [acessoLiberado, setAcessoLiberado] = useState(false);

  return (
    <main className="min-h-screen bg-lowend-darkest font-sans">
      {!acessoLiberado ? (
        <WelcomeScreen onEnter={() => setAcessoLiberado(true)} />
      ) : (
        <div className="p-10 text-center text-lowend-glow">
          <h2 className="text-2xl font-bold tracking-widest">A GALERIA ENTRARÁ AQUI...</h2>
        </div>
      )}
    </main>
  );
}

export default App;