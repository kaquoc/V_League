import React from 'react';
import ReactDOM from 'react-dom';


//ReactDOM.render HTML to webpage. Takes two argument, the HTML code and the HTML element
//ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

//JSX: writing HTML with React

var my_element = <h1>I Love JSX!</h1>;


/**Without JSX
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
 */

/**Inserting large block of HTML
 * Some rules:
 * - HTML code must be wrapped in ONE top level element
 * - Element must be closed with />
 * 
 * 
*/
my_element = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

//ReactDOM.render(my_element, document.getElementById('navbar'));

