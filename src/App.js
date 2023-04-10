import './App.css';
import Todo from './Todo';
import React from "react";
import { Paper, List} from "@material-ui/core";

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {id: 0, title: "Hello World 1", done: true},
        {id: 1, title: "Hello World 2", done: false},
        {id: 2, title: "Hello World 3", done: true},
      ]
    };
  }
  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
        {this.state.items.map( //원소를 하나씩 바꾼다..?
      (item, index) => (
        <Todo item={item} key={item.id} />
      ))}
      </List>
      </Paper>
    );
    return (
      <div classNmae="App">
        {/* <Todo> 컴포넌트 여러 개 */}
        {todoItems}   
      </div>
    );

  }
 
}

export default App;
