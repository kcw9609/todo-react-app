import './App.css';
import Todo from './Todo';
import React from "react";

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: {id: 0, title: "Hello World 1", done: true},
    };
  }
  render(){
    return (
      <div classNmae="App">
        <Todo item={this.state.item}/>
        <Todo />
      </div>
    );

  }
 
}

export default App;
