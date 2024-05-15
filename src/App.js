import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      csrd_sectors : []
    };
  }
  componentDidMount() {
    fetch('https://otso-csrd.s3.eu-west-1.amazonaws.com/json/esr_sectors.json')
      .then((response) => response.json())
      .then((sectors) =>
        this.setState(
          () => {
            return {csrd_sectors : sectors};
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
        {this.state.csrd_sectors.map((sector) => {
          return <h1 key={sector.id}>{sector.sector}</h1>
        })}
      </div>
    );    
  }
}

export default App;
