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
  render() {
    return (
      <div>
        {/* map will return a list of div containing each item in the arbitraryStateData state */}
        {/* Assumming that this is all a string */}
        {this.state.arbitraryStateData.map((item) => (
          <div> {item} </div>
        ))}
      </div>
    );
  }
}
export default MyComponent;

// Above is an example of to use the constructor in during the mounting phase of our component's lifecycle.
// Now that the data is set up on state, I can access it during our render portion of the mounting phase.

// Conclusion:
// - The constructor function on a React Class' Component's purpose is to serve up initial state data for when the time comes to mount up your DOM elements.

// RENDER NOTES ----------------
// - Now that we have our state data set up, I can use the state of the data to give me a list of elements and hand that data to React and let it do it's thing.
// - Above, within the render() method of the component, I will return a list of items that the arbitraryStateData property will generate.

// NOTE that any changes from setState() will invoke the render() method to fire.
// - Remember: render will fire in two ocassion, 1) on mount, 2) alteration of state
// - state object and render method are basically partner robots that can't work without the other.
// - Think of the state object as the bigger brother to the render function, state is always telling render wht to do, and the render function is a great brother and trust his borther, and executes on the commands.status-line

// Conclusion:
// - Basically the render() method is how we tell React to turn data into DOM elements. Render and the virtuall dom are best buddies.
// - I must continue to think about these methods as the mounting methods in our Component Lifecycle as you create more professional-looking code/
// Code Sandbox
// https://codesandbox.io/s/friends-o6j9j?file=/src/App.js
