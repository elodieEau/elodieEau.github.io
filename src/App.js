import './App.css';
import './styles/Components.css';

import Home from './sections/Home';
import Mecanical from './sections/Mecanical';
import Designer from './sections/Designer';

function App() {
  return (
    <div className="App">
      <Home />
      <Mecanical />
      <Designer />
    </div>
  );
}

export default App;
