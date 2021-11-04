const expressLoader = require('./express');
const mongodbLoader = require('./mongodb');

module.exports = ( app, server, configs ) => {

    expressLoader( app );

    mongodbLoader();

}