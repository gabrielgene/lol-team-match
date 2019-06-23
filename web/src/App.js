import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  handleFetch = async () => {
    const user = {
      name: 'Gene',
      user: 'gene',
      pass: '123',
      phone: '123',
    };
    const date = await (await fetch('/api/date.js')).json();
    const cookie = await (await fetch('/api/cookie.js')).json();
    console.log(date);
    console.log(cookie);
  };

  componentDidMount() {
    this.handleFetch();
  }

  getData = async () => {
    const userData = await (await fetch('/api/user.js')).json();
    console.log(userData);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.getData}>Obter dados</button>
        </header>
      </div>
    );
  }
}

export default App;
