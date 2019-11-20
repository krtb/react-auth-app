var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = new (require('express'))()
var port = 3000

var compiler = (webpack(config))