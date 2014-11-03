var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var fs = require("fs");
      data = fs.readFileSync(__dirname + "/../data/kaththi/aathi_enai.json",'utf8',function (err, data) {
        if (err) throw err;
        console.log("test"+data)
      });
  data = JSON.parse(data);
  res.render('index', data);
});

router.get('/public/stylesheets/:file', function(req, res) {
  var file = req.params.file;
  res.sendfile(__dirname + '/../stylesheets/' + file);
});

module.exports = router;