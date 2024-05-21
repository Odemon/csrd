import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      csrd_datapoints : []
    };
  }
  componentDidMount() {
    fetch('https://otso-csrd.s3.eu-west-1.amazonaws.com/json/esrs_dp.json')
      .then((response) => response.json())
      .then((datapoints) =>
        this.setState(
          () => {
            return {csrd_datapoints : datapoints};
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    return (
      <div className="App">
        {this.state.csrd_datapoints.map((datapoint) => {
          return <h1 key={datapoint.id}>{datapoint.Name}</h1> 
        })}
      </div>
    );    
  }
}

export default App;
