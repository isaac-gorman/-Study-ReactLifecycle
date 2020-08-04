// Learning objective:
// - Be able to define what the constructor and render method are and their significane in the React Component Lifecycle

// OVERVIEW QUESTION
// Q: Why is the render() method the life blood of every react class component?
// - Becuase front end dev's have to use the render() method in order to render UI to the screen.
// - When thinking of your render() think of render as a little robot that tell's react what to mount (display) to the browser screen.
// - It is crucial for me to identify when the render() is working and understand how it is working. As this will give me a deeper understanding of how the React ecosystem and it's components operate.

// THE REACT CONSTRUCTOR FUNCTION --------------------------------------------------------------------------------

// Q: What is the purpose of the constructor function in React?
// - Review: The constructor function is used inside class components.
// - The purpose of the constructor in React is to create components with an intitial state data for the initial render.
// - Constructor is a little Bob the Builder Robot that crafts little components with state that have an existing state that is ready for render based on what the Commander Render Method tell's React to render it.
// - The Constructor Robot is also capable of reciving more state via the little Carrier Props Bot's.
// - In the past React dev's used to bind all of the event handlers to the compoenent via the constructor, and now we don't have to because of the special ESNext syntax which enables dev's to  use arrow functions on the class methods.

// Mini Follow Along:
// - Arrow function ESNext syntax example:
eventHandler = () => this.setState({ foo: "bar" });
// - In the future I will have more then enough time to get reps practicing applicatin set up with state data via the constructor. But move on to the next concepts ->

// - For a second imagine that we have some data from an external file living within the application.
// - We also want to render a list of data out the DOM.
// - I we want to access that data form the external file, I would need to import that data as an array. In this context I would not care about the shape, or the type of data, just as long as it lives in the array.
// - In order to import this data I would use the constructor to set up it up on state.

// ----------------------------------------------------------------------------------------------------------------

// THE REACT RENDER METHOD ----------------------------------------------------------------------------------------
// Q: What is render() used for within the React Component Lifecycle?
// - It is used to return some piece of data to the DOM.
// - After that the virtual DOM will then handle the steps to mount those DOM pieces.

// Q: Will a component work without a render() method?
// - NO!
// - A component needs the render() method inorder for it to work.

// Q: Define a pure function? Why are pure functions important?
// - Well, render() should be a pure function, meaning it should return the same thing each time.
// - It's concern is to look at two things
// - 1) this.props
// - 2) this.state
// - Then after looking at those two concerns it will return some DOM element, and array of the DOM elements, and a couple of other things that I may want to reference later.

// Q: What is the function "there" to perform?
// - To be like a dog and play fetch and return what my component should render to the screen.
// - Remember that dev's usually ignore what "Component", but it is a very important Lifecycle method and should be regarded as such.

// Q: What's important to remember about the render() method within the RC Lifecycle?
// - It's called twice:
// - Once: in the Mounting Phase (Birth)
// - Twice: in the Updating Phase (Life/Growth)

// Mini Follow Along:

// ----------------------------------------------------------------------------------------------------------------
