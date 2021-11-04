const obj = {}

obj.HOST = 'sample.staging.com'; // not existing this is only a sample
obj.PORT = 27017
obj.DATABASE = 'sampleApiDB';

obj.mongooseConfig = {
    user: '',
    pass: '',
}

obj.connectionPath = `mongodb://${obj.HOST}:${obj.PORT}/${obj.DATABASE}`;

module.exports = obj;