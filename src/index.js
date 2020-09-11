import React from 'react'; // Look at the react files int he node_modules folder
import ReactDOM from 'react-dom'; // Look at the reactDOM files in the node_modules folder

import App from './app'; // Look at the app file in the project folder

ReactDOM.render(<App/>, document.querySelector('#root')); // Pass the app into the html doc