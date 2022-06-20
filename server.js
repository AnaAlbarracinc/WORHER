const express = require('express');
const path = require('path');

const app = express();
app.options('*', cors())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/worher'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/worher/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);

app.set("trust proxy", true);