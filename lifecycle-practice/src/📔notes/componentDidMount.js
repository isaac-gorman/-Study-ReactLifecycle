// Learning Objective:
// - Learn to use the "componentDidMount" function to set a components state post render.

// Q: Why is it important to understand how to use the timing of "componentDidMount"?
// - The timming is important to refrence becuase it ensures that the component has state on it before I do something with that component.
// - In the upcoming material I will learn
// - - When "componentDidMount" is called.
// - - What the common use cases for "componentDidMount" are.

// Q: What part of the Component Lifecycle is "componentDidMount" apart of?
// - The Birth/Mounting phase.
// - This method is invoked as soon as the render method is called the first time. ...but now what?

// Q: Once I have the component mounted, what's next?
// - We have the bare bones minimum mechanism in place to render something on the screen.

// Q: Why do I need to call setState withing "componentDidMount"?
// - Becuase it forces a render of the component.
// - *Remember: render fires on only two occasions 1) On mount 2) On a state change
// - Due to firing rules of the render() method, we must conatin all async actions within the "componentDidMount" function, especially when it comes to fetching data using HTTP request (get, post, put, delete)

// Q: What is the purpose/function of the "componentDidMount" function and other like it? 
// - DATA Fetching! this component function cDM, cDU, cDUM are all used for fetching data. Within the component lifecycle. 

// Q: What does this method garuntee?
// - compDidMount garuntees that it will be called only once in the whole lifecycle, immedietly after a component is mounted. 

// Q: What will I do till I learn more about async AJAX calls?
// - I will use componentDidMount to set up state data living in a seperate file. 
// - I will execute on this by pulling the data in and setting it on state. 
// - I may run across this on my assignment today. 
//  
