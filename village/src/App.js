import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMsg: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  endpoint = 'http://localhost:3333/smurfs';

  componentDidMount() {
    axios
      .get(this.endpoint)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  addSmurf = smurfData => {
    axios
      .post(this.endpoint, smurfData)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data,
          errorMsg: ''
        });
        console.log(this.state.smurfs);
      })
      .catch(err => {
        console.warn(err);
        this.setState({ errorMsg: err.response.data.Error });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/" exact>
              Smurf Directory
            </NavLink>
            <NavLink to="/smurf-form">Add a Smurf</NavLink>
          </nav>
          {this.state.errorMsg && <div className="error-msg">{this.state.errorMsg}</div>}
          <Route
            exact
            path="/"
            render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm addSmurf={this.addSmurf} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
