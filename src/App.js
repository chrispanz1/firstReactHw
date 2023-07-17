import logo from './logo.svg';
import './App.css';
import toy from './model/toy';
import Toy from './components/MyItem';
import List from './components/List';
import React from 'react';
//import Item from './components/MyItem';

class StarWars extends React.Component{
  constructor(){
    super()
    this.state={
      fortune: []
      
    }
  }
  getNewFortune(){
    const responses = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes definitely.',
      'As I see it, yes.',
      'You may rely on it.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      "Don't count on it.",
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.',
    ];
    this.setState({
      fortune:responses[Math.floor(Math.random()*responses.length)]
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.fortune}</h1>
        <button type="button" 
        onClick={()=>this.getNewFortune()} 
        className="btn">random eight ball!</button>

      </div>
    )
  }
}

function App() {
  console.log("hi",toy)
  return (
    <div className='App'>
    <header className="App-header">
      <StarWars/>
    </header>
      
     
      
    </div>
  );
}

export default App;
