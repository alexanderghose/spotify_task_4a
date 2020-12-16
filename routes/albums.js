var express = require('express');
var router = express.Router();

let albumsArray = [
    {id:"a0", name: "Thriller", artist: "MJ"},
    {id:"a1", name: "Baby One More Time", artist:"Britney"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('albums.ejs', {albumsArray});
});

module.exports = router;
