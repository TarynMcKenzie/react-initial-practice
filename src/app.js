import React from 'react'; // Look at the react files int he node_modules folder

// -----OLDER WAY TO RENDER REACT-----
// const app = () => {
//     return (

//     ); 
// }


// -----NEWER WAY TO RENDER REACT-----
const App = () => ( // Will implicity return the html elements
    <div>
        <h1>Hello React</h1>
    </div>
);

export default App;