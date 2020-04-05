import React from 'react';
import '../../resources/app/App.css';
import axios from 'axios';

/**
 * 
 */
export default class App extends React.Component {

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
        <form onSubmit={this.handleSubmit} className="form">
          <table>
            <tr><label className="label">Sign ID <input type="text" placeholder="Your Email" onChange={(e) => { this.setState({ name: e.target.value }) }} /> </label></tr>
            <tr><label className="label">Secret Code <input type="password" placeholder="Your Password" onChange={(e) => { this.setState({ address: e.target.value }) }} /> </label></tr>
            <tr><input type="submit" value="Submit" /> </tr>
          </table>
        </form>
        <p> {this.state.message} </p>
      </header>
    </div>;
  }
}
