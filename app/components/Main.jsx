var React = require('react');
var Nav = require('Nav');

//Inside of React you can only return one root component,
//so you have to wrap multiple components inside a <div> controll
//{this.props.children} refers to children of this "Main" component

//Main component contains Nav and itself actual children components
//(About, Weather, Example)
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

//Use Stateless Functional Component instead
var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
