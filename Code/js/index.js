'use strict';




 // USING REACT STRUCTURE
function Message() {
  return React.createElement(
    "h1", // Type of element
    null, // Props (none in this case)
    "Hello World" // Content
  );
}

function MessageContainer() {
  return React.createElement(
    "div",
    { style: { border: '1px solid black', padding: '10px', textAlign: 'center'} }, // Correctly pass styles
    React.createElement(Message) // Nest the Message component
  );
}

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(MessageContainer) // Use the MessageContainer component
  );
}

ReactDOM.render(
  React.createElement(App), // Render the App component
  document.getElementById('root') // Mount it to the element with ID 'root'
);
