var React = require('react');

//This component has only render() and not maintain any state
//-> you can use Stateless Functional Component instead
// var Example = React.createClass({
//   render: function () {
//     return (
//         <h3>Example Component</h3>
//     );
//   }
// });

//Stateless Functional Component
var Example = (props) => {
  return (
      <h3>Example Component</h3>
  );
}

module.exports = Example;
