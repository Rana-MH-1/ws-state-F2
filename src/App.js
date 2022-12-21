import React from "react";
import Timer from "./Components/Timer";


class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0,
      Incr_value:null,
      show:false
    }
  }

 Increment =()=>{
    this.setState({count: this.state.count + 1})
  }

  Decrement = ()=>{
    if(this.state.count > 0){
      this.setState({count: this.state.count - 1})
    }
  }

  Increment_with_value=()=>{
    this.setState({count: this.state.count + Number(this.state.Incr_value)})
  }

  toggleShow=()=>{
    this.setState({show: !this.state.show})
  }
  
  render(){
    return (
      <div className="App">
        <h2>This is a ws of state -- class</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
        <input onChange={(e)=> this.setState({Incr_value : e.target.value})} />
        <button onClick={this.Increment_with_value}>Increment with value</button>
        <hr/>
        {this.state.show && <Timer></Timer>}
        <button onClick={this.toggleShow}>Show Timer</button>

      </div>
    )
  }
}

export default App;
