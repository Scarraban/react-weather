var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div className="callout" style={{marginTop: '1rem'}}>
      <h1 className="text-center page-title">About</h1>
      <p>This weather apps shows off the React.js application in all its glory, with the ability to connect to an API and get weather information!</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to fetch weather data to the app
        </li>
      </ul>
      <p>Click <Link to="/">here</Link> to get started!</p>
    </div>
  );
};

module.exports = About;
