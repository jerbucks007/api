const express = require('express');
const configs = require('../configs');

const routes = require('../routes');

module.exports = ( app ) => {

  app.use(express.json(configs.express.bodyParserJSON));
  app.use(express.urlencoded(configs.express.bodyParserUrlEncode));

  app.use(routes());

}