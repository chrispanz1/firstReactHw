import logo from './logo.svg';
import './App.css';
import toy from './model/toy';
import Toy from './components/Toy';
import List from './components/List';


function App() {
  console.log("hi",toy)
  return (
    <div className="App">
      
     {toy.map((toyValue)=>{
      return(
        <Toy list={toyValue} />
      )


     })}

     <List />
      
    </div>
  );
}

export default App;
