import React from 'react';
import ReactDOM from 'react-dom';


//ReactDOM.render HTML to webpage. Takes two argument, the HTML code and the HTML element
//ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

//JSX: writing HTML with React

const my_element = <h1>I Love JSX!</h1>;
const root = ReactDOM.render(my_element, document.getElementById('root'));

/**Without JSX
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
 */

