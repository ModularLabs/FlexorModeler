import "../assets/css/App.css";
import React, { Component } from "react";
import ModuleList from "./children/ModuleList";
import ModuleDetail from "./children/ModuleDetail";
import Viewer from "./children/Viewer";

class App extends React.Component {
  render() {
    return (
      <div>
        <ModuleList />
        <ModuleDetail />
        <Viewer />
      </div>
    );
  }
}

export default App;
