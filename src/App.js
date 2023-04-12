import './App.css';
import Todo from './Todo';
import AddTodo from "./AddTodo"
import React from "react";
import { Paper, List, Container} from "@material-ui/core";

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [ // [] 배열
        {id: 0, title: "Hello World 1", done: true}, //{} 객체
        {id: 1, title: "Hello World 2", done: false},
        {id: 2, title: "Hello World 3", done: true},
      ]
    };
  }
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
    console.log("items : ", this.state.items);
  }
  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
        {this.state.items.map( //원소를 하나씩 바꾼다..?
      (item, index) => ( // param1, param2 
        <Todo item={item} key={item.id} /> // return 값
      ))}
      </List>
      </Paper>
    );
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
        {/* <Todo> 컴포넌트 여러 개 */}
          <div className="TodoList">{todoItems}</div>   
        </Container>
      </div>  
    );

  }
 
}


/* (param1, param2) => { 실행문 }
  실행문이 return 만있으면 return과 {}생략가능
  (param1, param2) => 반환값

  this.items.map((item, index) => { return <Todo item={item} key={item.id} />})
  this.items.map((item, index) => <Todo item={item} key={item.id} />)
*/

export default App;
