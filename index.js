// require('dotenv').config()
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var {getDriverConfig} = require('./src/helpers/driversServices.js');
var path = require('path');

var browser = process.env.MOCHA_BROWSER || 'chrome';
driver = getDriverConfig(browser);
exports.driver = driver;

exports.base_url = process.env.TEST_BASE_URL || 'https://ahfarmer.github.io/calculator/';