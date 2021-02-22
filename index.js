var express = require('express');
var app = express();

app.get('/student/studentsList', (req, res) => {

  res.json({
    "results": [
      "Rajesh",
      "Ramesh",
      "Sayali",
      "Sanjana"
    ]
  })

});
app.listen('3000', function () {
  console.log("Server started");
})