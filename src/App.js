import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "zainab",
      bio: "student learning how to code",
      profession: "student",
      imgSrc: "https://via.placeholder.com/150",
      shows: false,
      count: 0,
    };
  }
  toggleShow = () => {
    if (this.state.shows === false) {
      this.setState({
        shows: true,
        count: 0,
      });
      setInterval(() => this.counter(), 1000);
    } else {
      this.setState({
        shows: false,
        count: 0,
      });
      clearInterval(this.counter);
    }
  };

  showContent = () => {
    if (this.state.shows) {
      return (
        <div>
          <p> {this.state.fullName}</p>
          <p> {this.state.bio}</p>
          <p> {this.state.profession}</p>
          <img src={this.state.imgSrc} alt="shut up" />
        </div>
      );
    }
    return null;
  };
  counter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Click Me</button>
        {this.showContent()}
        timerId : {this.state.count}
      </div>
    );
  }
}

export default App;
