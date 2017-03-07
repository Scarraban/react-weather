var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather =  React.createClass({
  _handleSearch: function(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }.bind(this), function(e) {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    }.bind(this));
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if(location && location.length > 0) {
      this._handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;
    if(location && location.length > 0) {
      this._handleSearch(location);
      window.location.hash = '#/';
    }
  },
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this._handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
