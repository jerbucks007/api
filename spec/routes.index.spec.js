const request = require('supertest');
const assert = require('assert');

const app = require('../app');

describe('GET Home', function () {

    it('expected status = 200', function (done) {
        request(app)
            .get('/')
            .expect(200, done)
    });

    it('expected res.text tobe "HOME CALLED"', function (done) {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, "HOME CALLED");
                done();
            });
    })

});