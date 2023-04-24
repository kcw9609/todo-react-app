import './App.css';
import Todo from './Todo';
import AddTodo from "./AddTodo"
import React from "react";
import { Paper, List, Container} from "@material-ui/core";
import { call } from "./service/ApiService";

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [] // 배열 초기화
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }



  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  delete = (item) => { //찾아서 지우기
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  };
  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
        {this.state.items.map( //원소를 하나씩 바꾼다..?
      (item, index) => ( // param1, param2 
        <Todo item={item}
          key={item.id}
          delete={this.delete}
          update={this.update}
           /> // return 값
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

  };

}


/* (param1, param2) => { 실행문 }
  실행문이 return 만있으면 return과 {}생략가능
  (param1, param2) => 반환값

  this.items.map((item, index) => { return <Todo item={item} key={item.id} />})
  this.items.map((item, index) => <Todo item={item} key={item.id} />)
*/

export default App;
