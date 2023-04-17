import React from "react";
import { ListItem, ListItemText, InputBase, Checkbox, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { DeleteOutline, DeleteOutlined } from "@material-ui/icons";

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }
  deleteEventHandler = () => {
    this.delete(this.state.item); // 부모 props전달받은 delete()함수
  }
  offReadOnlyMode = () => {
    console.log("Event!", this.state.readOnly)
    this.setState({readOnly: false }, () => {
      console.log("ReadOnly? ", this.state.readOnly);
    })
  }
  editEventHandler = (e) => { //이벤트를(사용ㅈ가 작성한 값) 인자로 받아서 바꾸려고
    // 꺼내오고 수정하고 다시넣기
    const thisItem = this.state.item;
    thisItem.title = e.target.value; // target...키 이벤트가 바료ㅐㅇ한 객체로부터....
    this.setState({item: thisItem});
  }//=> 어떤 이벤트가 일어났는지 어떻게 구별하는지???
  enterKeyEventHandler = (e) => {
    // 눌러진 key가 enter인지 확인해야함
    if(e.key === "Enter"){
      this.setState({ readOnly: true});
    }
  }
  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.done = !thisItem.done;
    this.setState({item: thisItem});
  }
  render(){
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} // ui 값이 바꾸게
          onChange={this.checkboxEventHandler}/>
        
        <ListItemText>
          <InputBase
            inputProps={{"aria-label": "naked",
              readOnly: this.state.readOnly,
            }} // 속성 지정
            
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
            onClick={this.offReadOnlyMode}
            onChange={this.editEventHandler}
            onKeyPress={this.enterKeyEventHandler}
            />     
        
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton 
          aria-label = "Delete Todo"
          onClick={this.deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
  }
}
export default Todo; // 다른 파일에서도 사용가능하도록 함