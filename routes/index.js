module.exports = function (io) {
    //now you can use io.emit() in this file

    var express = require('express');
    var router = express.Router();
    /* GET home page. */
    router.get('/', function (req, res, next) {
        io.on('connection', function (socket) {
            socket.emit('news', { hello: 'world' });
            socket.on('event', function(data){
                console.log(data);
            });
        });
        res.render('index', {title: 'Express'});

    });

    return router;
};
//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//module.exports = router;
