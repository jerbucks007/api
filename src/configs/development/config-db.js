const obj = {}

obj.HOST = 'localhost';
obj.PORT = 27017
obj.DATABASE = 'sampleApiDB';

obj.mongooseConfig = {
    user: '',
    pass: '',
}

obj.connectionPath = `mongodb://${obj.HOST}:${obj.PORT}/${obj.DATABASE}`;

module.exports = obj;