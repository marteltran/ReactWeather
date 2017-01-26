var React = require('react');

//This component has only render() and not maintain any state
//-> you can use Stateless Functional Component instead
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

//Stateless Functional Component
//always take 'props' argument
var About = (props) => {
  return (
    <h3>About component</h3>
  );
}

module.exports = About;
