import React from 'react';

class Todo extends React.Component{
  render(){
    return (
      <div className="Todo">
        <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
        <lable for="todo0">Todo 컴포넌트 만들기</lable>
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