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
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started");
})
