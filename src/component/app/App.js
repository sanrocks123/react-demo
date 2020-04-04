import React from 'react';
import './App.css';
import axios from 'axios';

/**
 * 
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      message: "Hello User"
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      message: "Great, form submitted " + this.state.name + " !"
    });
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr><label>Name: <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} /> </label></tr>
            <tr><label>Address: <input type="text" onChange={(e) => { this.setState({ address: e.target.value }) }} /> </label></tr>
            <tr><input type="submit" value="Submit" /> </tr>
          </table>
        </form>
        <p> {this.state.message} </p>
      </header>
    </div>;
  }
}

export default App;
