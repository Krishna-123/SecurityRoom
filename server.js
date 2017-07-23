var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');


app.set('port', (process.env.PORT || 3001));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(cors());      // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// var button = {
//     type: 'button1',
//     status: 'off',
// };

var Hub = {
  Light: 'on',
  Switch: 'off',
};

app.get('/api/stuff.json', (req, res) => {
    console.log('Get request received ');
    res.setHeader('Cache-Control', 'no-cache');
    res.json(Hub);
});

app.post('/api/stuff.json', (req, res) => {
    Hub.Light = req.body.Light;
    Hub.Switch = req.body.Switch;
    console.log('post is received ' + 'status of Light : ' + Hub.Light + 'status of Switch : ' +  Hub.Switch);
    res.setHeader('Cache-Control', 'no-cache');
    res.json(Hub);
});


client.on('connect', function () {
    client.subscribe('aitl/aihub');
    client.publish('aitl/aihub', 'Hello aitl');
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
   // client.end();
});


app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
