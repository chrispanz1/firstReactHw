import logo from './logo.svg';
import './App.css';
import toy from './model/toy';
import Toy from './components/Toy';
const state={
  toy
}

function App() {
  return (
    <div className="App">
      <Toy list={state.toy[0]}/>
      <Toy list={state.toy[1]}/>
      <Toy list={state.toy[2]}/>
      
    </div>
  );
}

export default App;
