import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLightOn: false
    }
  }

  handleClick = () => {
    this.setState({isLightOn: !this.state.isLightOn})
  }

  render(){
    const url = this.state.isLightOn ? "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png" : "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
    return(
      <div className="App">
        <img onClick={this.handleClick} src={url}/>
      </div>
    )
  }
}

export default App;
