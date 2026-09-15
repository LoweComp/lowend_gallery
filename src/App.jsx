import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Gallery from './components/Gallery';

function App() {
  const [acessoLiberado, setAcessoLiberado] = useState(false);

  return (
    <main className="min-h-screen bg-lowend-darkest font-sans">
      {!acessoLiberado ? (
        <WelcomeScreen onEnter={() => setAcessoLiberado(true)} />
      ) : (
        <Gallery onBack={() => setAcessoLiberado(false)} />
      )}
    </main>
  );
}

export default App;