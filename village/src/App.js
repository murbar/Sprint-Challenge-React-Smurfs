import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
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
          smurfs: res.data
        });
        console.log(this.state.smurfs);
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SmurfForm addSmurf={this.addSmurf} />
          <Smurfs smurfs={this.state.smurfs} />
        </div>
      </Router>
    );
  }
}

export default App;
