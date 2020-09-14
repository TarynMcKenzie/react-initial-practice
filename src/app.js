import React from 'react'; // Look at the react files int he node_modules folder
import "app.css"; // Look at the css file to get style
// import image from "image.jpg"; // Look at the image file to load image


// ======= Component Imports =======
import Nav from "./nav"; // Look at th nav.js file for the navigation

// -----OLDER WAY TO RENDER REACT-----
// const app = () => {
//     return (

//     ); 
// }


// -----NEWER WAY TO RENDER REACT-----
const App = () => ( // Will implicity return the html elements
    <div>
        <Nav />
        <h1 className="main_header">Hello React</h1>
        {/* <img src={image} alt="" /> */}
    </div>
);

export default App;