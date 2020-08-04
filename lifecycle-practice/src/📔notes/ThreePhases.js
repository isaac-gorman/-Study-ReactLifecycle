// Learning Objective:
// - Be able to explain and visually model the three phases of the React Component Lifecycle

// Q: Why is the React Component Lifecycle an important concept to leverage when building React Apps?
// - Because I must consider the lifecycle when making API request.
// - Then after request are made make decison as to render data based on the data that we recived.

// Q: In essence what is React?
// - In essence React is a library in which you build app with multiple components to enable a user to carry out specific task.
// - To put it simply, a component can be single piece of an interface that only represents a portion of the entire app.
// - In theory, a component lifecycle occurs in three stages.

// Q: What are the three phases of the React Component Lifecycle?
// - 1) Birth/Mounting
// - 2) Growth/Updating
// - 3) Death/Unmounting

// Q: What is the phase in which a component is being built from the ground up?
// - Phase 1:
// - The Birth/Mounting Phase
// - In this phase the component is being built from the ground up.
// - Multiple things are occuring in this phase:
// - 1) Whatever initial data I want to access, I will have to define on the constructor phase.
// - 2) I must inkove the "render()" method.
// - 3) I must inkoved the "componentDidMount()" function.

// Q: What is the phase in which I will be updating component data?
// - Phase 2:
// - The Growth/Updating Phase
// - This is a the stage where I will be updating the data of the component.
// - There is also 2 other sub-actions that occur in this phase:
// - 1) If needed I can force a call to render, by using setState() to change the components state data.
// - 2) If I want to stop a component from rendering I can also use the "shouldComponentUpdate()" method.

// Q: What is the phase in which we are removing the component from the screen?
// - Phase 3:
// - The Death/Un-mounting Phase
// - This is the phase in where I can set up a component to be removed from the screen.
// - In the Death/Un-mounting Phase there are 2 sub-actions that can occur:
// - 1) A component is programmed to be removed from the screen.
// - 2) If I want to clean up I could use the "componentWillMount()" method.
