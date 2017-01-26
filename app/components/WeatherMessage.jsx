var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//
//     //Get the props values from Parent component
//     //Any props values from container/parent are inherited by child components
//     var {temperature, location} = this.props;
//
// //Below statement NOT works as the state object of parent not passed to child.
// //and the state of this component is NULL for now.
// //    var {temperature, location} = this.state;
//
//     return (
//       <h3>It is {temperature} at {location}</h3>
//     );
//   }
// });

//Use Stateless Functional Component instead
// var WeatherMessage = (props) => {
//   //Get the props values from Parent component
//   //Any props values from container/parent are inherited by child components
//   var {temperature, location} = props;
//
// //Below statement NOT works as the state object of parent not passed to child.
// //and the state of this component is NULL for now.
// //    var {temperature, location} = this.state;
//
//   return (
//     <h3>It is {temperature} at {location}</h3>
//   );
// }

//Instead of passing 'props' into argument, you can simply pass its properies
//Use Stateless Functional Component instead
var WeatherMessage = (temperature, location) => {
  return (
    <h3>It is {temperature} at {location}</h3>
  );
}

module.exports = WeatherMessage;
