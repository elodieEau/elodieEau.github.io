import './App.css';
import './styles/Components.css';

import Home from './sections/Home';
import Mecanical from './sections/Mecanical';
import Designer from './sections/Designer';
import Contact from './sections/Contact';

function App() {

  return (
    <div className="App">
      <Home />
      <Mecanical />
      <Designer />
      <Contact />
    </div>
  );
}

export default App;
