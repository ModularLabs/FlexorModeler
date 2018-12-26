import React, { Component } from "react";
import { sceneCreator } from "./utils/sceneCreator";

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    sceneCreator(this.sceneRef);
  }

  render() {
    return (
      <div
        ref={element => {
          this.sceneRef = element;
        }}
      />
    );
  }
}
