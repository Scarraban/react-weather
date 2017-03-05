const express = require('express');
const PORT = process.env.PORT || 3000;

// CREATE APP
var app = express();

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Server started on port ' + PORT);
});
