const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const dbUser = "gpole";
const dbPass = "gpole-server";
// Body parser
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// Database connection
const options = {
    useMongoClient: true,
}

mongoose.connect(`mongodb://${dbUser}:${dbPass}@ds247047.mlab.com:47047/landingpage-private`, options);
mongoose.Promise = bluebird;

// Structural blueprint
const itemBlueprint = {
    bookmarkInput: String,
    bookmarkImg: String,
}
const Bookmark = mongoose.model('Bookmark', itemBlueprint);


module.exports = function (app) {
    app.get('/', function (req, res) {
        // Get data from mongodb and pass to view
        Bookmark.find({}, function (err, data) {
            if (err) throw err;
            res.render('landingpage', {
                data: data
            });
        });

    });
    app.post('/', urlencodedParser, function (req, res) {
        // Get data from the view and add to mongodb
        let newBookmark = Bookmark(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
    app.delete('/:item', function (req, res) {
        // Delete the requested item from mongodb
        Bookmark.find({
            _id: req.params.item
        }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    })

};
