var React = require('react');

var WeatherForm = React.createClass({
  //create a property as a function
  onFormSubmit: function(e) {
    //Prevent page refresh right after button pressed
    e.preventDefault();

    //Get value from form
    //this.refs.location refers to ref="location" in the inputbox
    //this variable become property of this component.
    var location = this.refs.location.value;

    //validate data
    if(location.length > 0) {
      //clear inputbox
      this.refs.location.value;
      //Call onSearch() function and pass data to it.
      //Note that the 'onSearch' (which is a function) is not found in here
      //It is declared in the container conponent (Weather.jsx).
      //So child component get user-entered data --> call parent component
      //function --> parent manipulate and setState.
      this.props.onSearch(location);
    }
  } ,
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
