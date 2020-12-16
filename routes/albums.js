var express = require('express');
var router = express.Router();

let albumsArray = [
    {id:"a0", name: "Thriller", artist: "MJ"},
    {id:"a1", name: "Baby One More Time", artist:"Britney"},
]

function getName(incoming_id) {
    for (let current_album of albumsArray) {
        if (current_album.id == incoming_id) {
            return current_album.name
        }
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('albums.ejs', {albumsArray});
});

router.get('/:id', function(req,res) {
    let myname = getName(req.params.id)
    res.send("you have typed " + req.params.id + " which is album name " + myname)
})

module.exports = router;
