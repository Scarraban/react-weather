var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=996c6e655de31d47616bd431c9d32f06&units=metric';

module.exports = {
  getTemp: function(location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(error) {
        throw new Error(error.response.data.message);
      });
  }
}
