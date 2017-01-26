//These are required as babel does not know where are external libs
//used in .JSX files
var React = require('react');
var ReactDOM = require('react-dom');

//ES 6  syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//The above is equivalent to below 4 lines : (ES 5 syntax)
//var Route = require('react-router').Route;
//var Router = require('react-router').Router;
//var IndexRoute = require('react-router').IndexRoute;
//var hashHistory = require('react-router').hashHistory;

//load outer container component.
var Main = require('Main');

/*
//ES 6  code sample
//Need to install the plugins stage-0 (contain all features of 1/2/3) from
//https://babeljs.io/docs/plugins/
//using npm cmd
//>npm install babel-preset-stage-0
//then add into webpack.config.js this plugin item:
//...
//    presets: ['react', 'es2015', 'stage-0']
//....

var objOne = {
   name: 'Martel',
   location: 'San Jose'
};

//objTwo contains all properties of objOne
var objTwo = {
   age: 25,
   ...objOne
};

//print objTwo into the console
console.log(objTwo);
*/

var Weather = require('Weather');
var About = require('About');
var Example = require('Example');


//hasHistory is Router property to track history of prev navigations
//Using hasHistory will add-on the '#' sign to your URL
//URL Mapping
//<Route path="/"  component={Main}> means rendering Main component on
//http://localhost:3000/ (http://localhost:3000/#/?_k=tqc3k1)
//<IndexRoute> used to render component on the same path of other components
//Nested <Route /> for "About" component. Which means rendering About
//component on http://localhost:3000/#/about (http://localhost:3000/#/about?_k=jff4sg)

ReactDOM.render(
     <Router history={hashHistory}>
        <Route path="/"  component={Main}>
           <Route path="about"  component={About} />
          <Route path="example"  component={Example} />
           <IndexRoute   component={Weather} />
        </Route>
     </Router>,
   document.getElementById('app')
);
