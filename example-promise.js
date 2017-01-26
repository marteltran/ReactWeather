/*
Compare between callback pattern & promise pattern
These pattern used for non-blocking I/O in javascript
*/

/*
//1) Callback pattern
//Take location and return temperature
//This must be asynchronouse function
//The 'callback' argurment is a passed-in function later on
function getTempCallback(location, callback) {
  //You need to execute 'callback' in both scenarios
  //Nomatter the result, both scenarios are executed
  //Success scenario
  callback(undefined, 78);
  //Error scenarios
  callback('location not found');
}

//Above function can be called like this
//You pass your defined function into 'callback' argurment
getTempCallback ( 'California', function (err, temp) {
  //You define which scenario to take based on the return from callback
  if(err) {
    console.log('error', err);
  }
  else {
    console.log('success', temp);
  }

})

//Testing -
//C:\REACT\ReactWeather>node example-promise.js
//success 78
//error location not found
//=> problem with callback-pattern is both scenarios getting execute.


//2) Promise pattern
//Define asyn function that return Promise obj
function getTempPromise(location) {
  return new Promise ( function (resolve, reject) {
    //Wrap around the timeout of ex: 1000 ms.
    setTimeout ( funtion () {
      //Only one scenario is returned under Promise obj
      //if successful
      resolve(78);
      //if error
      reject('location not found');
    }, 1000);
  });
}

//Call the above function like below:
//Using "then" keyword
getTempPromise('California').then (
  //You defined how to process sucessful scenario returned by Promise
  function (temp)) {
    console.log('promise success', temp);
  },
  //You defined how to process error scenario returned by Promise
  function (err) {
    console.log('promise fail', err);
  });

  //Testing -
  //C:\REACT\ReactWeather>node example-promise.js
  //promise success 78
  //--> In this example, only the resolve(78) is returned.
*/

  /*
  Practice ES6 Promise pattern
  */

  function addPromise (a,b) {
    //Create Promise obj
    return new Promise (function (resolve, reject) {
      //Wrap around the timeout of ex: 1000 ms.
      setTimeout( function () {
        //success case
        if (typeof a == 'number' && typeof b == 'number') {
          resolve(a+b);
        }
        //Fail case
        else {
          reject('A or B is not a number');
        }
      }, 1000);

    });
  }

  //Ex: Call above Promise method with good numbers
  addPromise(2,3).then (function (sum) {
    console.log('success', sum);
  }, function (err) {
    console.log('err', err);
  })

  //Ex: Call above Promise method with bad numbers
  addPromise('martel',3).then (function (sum) {
    console.log('success', sum);
  }, function (err) {
    console.log('err', err);
  })
