var React = require('react');

//load Link property of react-router
//This creates clickable link on the page.
//The destination page is indicate in "to="..." value
//Ex:
//<Link to="/">Get Weather</Link> --> Link to Home page (Main.jsx)
//<Link to="/about">About</Link> --> Link to "About" page (About.jsx)

//create new variable to hold react-router's property named 'Link'
//same as
//var Link = require('react-router').Link
//var IndexLink = require('react-router').IndexLink
var {Link, IndexLink} = require('react-router');

//Nav component contains all links-to other components.
//You can also hardcode the link such as:
//<a href="#/about">About</a>
//but not recommended as you cannot manipulate the link-style dynamically
//In below example, the "activeStyle" is only effected when user click on it.
// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//         <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
//       </div>
//     );
//   }
// });

//Use Stateless Functional contains instead
var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
      <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
    </div>
  );
}

module.exports = Nav;
