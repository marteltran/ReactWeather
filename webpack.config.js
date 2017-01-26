module.exports = {
  //input file to compile. this is .JSX file
  entry: './app/app.jsx',
  //output path & file
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  //specify file extensions to compile
  resolve: {
    root: __dirname,
    alias: {
      //alias name for components
      Main:  'app/components/Main.jsx',
      Nav:   'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm:  'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'

    },
    //Do not forget the 'dot' infront of each extension, ex: .js
    extensions:['','.js','.jsx']
  },
  //load babel libs as lib-mocule to compile .jsx file
  module: {
    //Array of loader objects
    loaders:[
      {
        //loader name
        loader: 'babel-loader',
        //pass data to babel to indicate the action
        query: {
          //tell babel take .jsx file, then pass it to react to get
          //the output and run it on ES2015 (ES5)
          presets: ['react', 'es2015', 'stage-0']
        },
        //tell what file babel-loader to get (regular expr)
        test: /\.jsx?$/,
        //specify files in which folders that we do not want babel to takecare
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  //Create SourceMap for easy debugger. It exclude all translated code by webpack,
  //and just display your actual react in the 'Source' tab of React Dev Tool
  //in the browser (Chrome/FireFox)
  devtool: 'cheap-module-eval-source-map'

};
