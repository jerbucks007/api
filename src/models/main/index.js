
const mongoose = require('mongoose');
const configs = require('../../configs');

const userModel = require('./model-users');

const connection = mongoose.createConnection(configs.db.connectionPath, configs.db.mongooseConfig);
const users = userModel(mongoose, connection);

module.exports = { users };