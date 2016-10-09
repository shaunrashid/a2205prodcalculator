/* globals console, __dirname, require */

var express = require('express');
var app = express();
var port = 8002;

var compression = require('compression');
var handlebars = require('express-handlebars');

var parser = require('body-parser');
var uParser = parser.urlencoded({ extended: false });

var router = express.Router();

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/app/views/layouts',
    partialsDir: __dirname + '/app/views/partials'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

app.use(uParser);
app.use(compression());

app.use('/calculate', router);
app.use('/css', express.static(__dirname + '/app/_static/css'));
app.use('/img', express.static(__dirname + '/app/_static/img'));


app.get('/', function (req, res) {
    res.render('home');
});

router.post('/', uParser, function(req, res) {
    var calculations = calculate(req.body);
    
    res.render('home', {
        "result" : calculations
    });
});





/* REST API SETUP */

var api = express.Router();

var goods = require('./app/models/goods.js');

api.route('/').get(function(req, res) {
    res.json(goods);
});

app.use('/api', api);



app.listen(port, function() {
    console.log('App listening on port ' + port);
});


function calculate(data) {
    var buildings = {
        foodDesignFactory: 0,
        soyFarm: 0,
        cattleRanch: 0,
        vineyard: 0
    };
    
    buildings.foodDesignFactory = data.food_design_factory;
    buildings.cattleRanch = buildings.foodDesignFactory * 2;
    buildings.soyFarm = buildings.cattleRanch * 1;
    buildings.vineyard = buildings.foodDesignFactory * 2;
    
    return buildings;
}