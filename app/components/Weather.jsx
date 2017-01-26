//This is container component that maintain the state
//Flow: WeatherForm (cild) send user data to Weather (parent)
//Parent go to get data (temperature) then set its state changed
//When state is changed, all chidren compnents are updated, including
//WeatherForm & WeatherMessage.

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
      /*
      //declare state vars & init them
      location: 'somewhere',
      temperature: 0
      */
    }
  },
  //this function is asyn by using Promise-pattern
  handleSearch: function (loc) {
    //'that' is replace 'this' as 'this'-binding will be localhost
    //when getting inside to Promise function.
    var that = this;

    //Use debbuger (optional) to set break point right here
    //debugger;

    //setSate for isLoading
    this.setState({isLoading: true});

    //sucess - get back temp value
//    alert('Call openWeatherMap');

    //if nothing return from the openWeatherMap.getTemp() function
    //You will get error in the console, such as:
    //"can't read the property 'then' of undefined"
    //-->Check the openWeatherMap.getTemp() to return sth at the end.
    //Also reset 'isLoading' flag to false after done, even return error
    openWeatherMap.getTemp(loc).then( function (temp) {
//      alert(temp);
      that.setState({
        location: loc,
        temperature: temp,
        isLoading: false
      });
    },
    //error
    function (errMsg) {
      that.setState({
        isLoading: false
      });
      alert(errMsg);
    });
  },
  //assign 'onSearch' attribute = function call in WeatherForm component
  //Pass state vars into WeatherMessage child component
  render: function () {
    //Get both values from state object and pass them to child components
    var {isLoading, temperature, location} = this.state;

    //this function is used to detect which render message should be return
    function renderMessage () {
        //if isLoading is true - Wait until it get reset to false
        //by the openWeatherMap.getTemp()
        if(isLoading) {
            return <h3>fetching weather ...</h3>
        }
        //if isLoading is false and both 'temperature' and 'location' exist
        else if (temperature && location) {
          return <WeatherMessage temperature={temperature} location={location}/>;
        }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
