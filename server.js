var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
    web: {
        produces: ['application/json']
    }
}));