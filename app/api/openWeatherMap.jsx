//Return temperature at location then use Axios (lib tool) to fetch
//Must install Axios
//>npm install axios --save

//Load Axios
var axios = require('axios');

//key = ef5fbe6aa3b50d4db09aa3478351cec2
//ex: url = api.openweathermap.org/data/2.5/weather?q=London,uk&apiid={key}
//units=imperial --> use Farenheit degree
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fb5c5f78899009db43e35184ffd7ea03&units=imperial';

module.exports = {
  getTemp: function (loc) {
    //First encode the 'loc' parameter to be understand by the browser
    var encodedLoc = encodeURIComponent(loc);
//    alert('loc: '+ loc);
    //Build URL to add location parameter
    //Use double back-quote to indicate that javascript syntax is
    //running inside of this expression.
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}` ;
//    alert('requestUrl: ' + requestUrl);

      //Use Asios to make request and get response
      //Must return result of this axios call to the caller.
      return axios.get(requestUrl).then( function (res) {
        //sucess case:
        //if response contain return code 'cod' & 'message': indicate some error
        //Ex: Error
        // {
        //  cod: 401,
        //  message: "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        // }

//        alert('Check response.')
        if(res.data.cod && res.data.message) {
//            alert('success case - code: '+ res.data.cod);
//            alert('success case - message: '+res.data.message);
            throw new Error(res.data.message);
        }
        else {
//          alert('success case - temp: '+ res.data.main.temp);
          return res.data.main.temp;
        }
      }, function (res) {
        //error case
        //Create new Error object.
//      alert('error case - code: '+ res.data.cod);
//      alert('error case - message: '+res.data.message);
        throw new Error(res.data.message);
      });

  }
}
