var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather =  React.createClass({
  _handleSearch: function(location) {
    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(temp) {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }.bind(this), function(errorMessage) {
      this.setState({ isLoading: false });
      alert(errorMessage);
    }.bind(this));
  },
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this._handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
