import React from "react";
import { TextField, Paper ,Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = { item: {title: "" }};
    this.add = props.add;
  }
  
  onInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem});
    console.log(thisItem);
  }

  onButtonClick = () => { // add함수로 item리스트에 추가
    this.add(this.state.item); // 부모(app)에게서 받은 함수
    this.setState({ item: { title: "" }});
  }

  enterKeyEventHandler = (e) => {
    if (e.key === 'Enter'){
      this.onButtonClick();
    }
  }

  render(){
    return (
      <Paper style={{ margin: 16, padding: 16}}>
        <Grid container>
          <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
            <TextField
              placeholder="Add Todo here" 
              fullWidth 
              onChange={this.onInputChange}
              onKeyPress={this.enterKeyEventHandler}
              value={this.state.item.title}
            />
          </Grid>
          <Grid xs={1} md={1} item>
            <Button 
              fullWidth color="secondary" 
              variant="contained"
              onClick={this.onButtonClick}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default AddTodo;