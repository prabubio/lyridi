var express = require('express');
var router = express.Router();

/* GET song page. */
router.get('/:movie/:song', function(req, res) {
    var fs = require("fs"),
        movie = req.params.movie,
        song = req.params.song,
        parts = song.match("(.*)?\.html$");

    if (parts && parts[1]) {
        data = fs.readFileSync(__dirname + "/../data/" + movie + "/" + parts[1] + ".json",'utf8',function (err, data) {
            if (err) throw err;
            console.log("test"+data);
        });
        data = JSON.parse(data);
        res.render('index', data);
    } else {
        res.send("Page not available");
        console.log("404"+ movie + song);
    }
});

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


router.get('/public/:type/:file', function(req, res) {
  var file = req.params.file,
      type = req.params.type;
    console.log(__dirname + '/../' + type + '/' + file);
  res.sendfile(__dirname + '/../' + type + '/' + file);
});

module.exports = router;