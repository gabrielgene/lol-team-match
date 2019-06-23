import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Auth/Login/";

class App extends React.Component {
  handleFetch = async () => {
    const date = await fetch("/api/date.js").then(r => r.json());
    const cookie = await fetch("/api/cookie.js").then(r => r.json());
    console.log(date);
    console.log(cookie);
  };
  componentDidMount() {
    this.handleFetch();
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
