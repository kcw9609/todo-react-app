import React from "react";

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = { item: props.item };
  }
  render(){
    return (
      <div className="Todo">
        <input type="checkbox"
         id={this.state.item.id}
          name={this.state.item.id}
           checked={this.state.item.done}
           />
        <lable id={this.state.item.id}>{this.state.item.title}</lable>
        {
          /* 
            comment here
          */
        }
        { // comment1
          // comment2 
        }
      </div>
    )
  }
}
export default Todo; // 다른 파일에서도 사용가능하도록 함