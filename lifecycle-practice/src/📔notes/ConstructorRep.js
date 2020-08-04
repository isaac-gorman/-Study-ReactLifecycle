import React from "react";
import { data } from "./extraneousSource.js";

class MyComponent extends React.Component {
  constructor() {
    //If I needed to receive some props here. I would pass them in through the constructor. e.g. "constructor(props)"
    super();
    //Now if I where to actually receive props through the constructor, I will need to pass them back through super(props);
    this.state = {
      arbitraryStateData: data,
    };
  }
}
export default MyComponent;

// Above is an example of to use the constructor in during the mounting phase of our component's lifecycle.
// Now that the data is set up on state, I can access it during our render portion of the mounting phase.

// Conclusion:
// - The constructor function on a React Class' Component's purpose is to serve up initial state data for when the time comes to mount up your DOM elements.
