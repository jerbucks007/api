const request = require('supertest');
const assert = require('assert');

const userSchema = require('../src/resources/schemas/schema-user');
const testData = require('../spec/test.data');

const app = require('../app');

describe('GET /user && GET /users', function () {

    it('expected status = 200', function (done) {
        request(app)
            .get('/users')
            .expect(200, done);
    });

    it('should return 404 if _id not found', function (done) {
        request(app)
            .get(`/user/618338e4b033ee56fa5734ef`)
            .expect(404)
            .end((err, res) => {
                assert.strictEqual(res.text, "User Doesn't Exist");
                done();
            })
    });

    // it('should return 200 if _id is found', function (done) {
    //     request(app)
    //         .get(`/user/${testData._id}`)
    //         .expect(200)
    //         .end( async (err, res) => {
    //             const validation = await userSchema(res.body);
    //             assert.equal(validation.errors.length, 0)
    //             done();
    //         })
    // });

});

describe('POST /user', function () {

    it('should return 201 if user successfully created', function (done) {
        request(app)
            .post(`/user`)
            .send(testData.correctData)
            .expect(201)
            .end((err, res) => {
                assert.strictEqual(res.text, "User Successfully Created");
                done();
            })
    });

    it('should return 500 if user is not successfully created', function (done) {
        request(app)
            .post(`/user`)
            .send(testData.wrongData)
            .expect(500)
            .end( async (err, res) => {
                assert.strictEqual(res.text, "Invalid format in Body");
                done();
            })
    });

});

describe('DELETE /user', function () {

    // it('should return 204 if user successfully deleted', function (done) {
    //     request(app)
    //         .delete(`/user/${testData._idDelete}`)
    //         .expect(204)
    //         .end((err, res) => {
    //             assert.strictEqual(res.text, "User Successfully Deleted");
    //             done();
    //         })
    // });

    it('should return 500 if user is not successfully deleted', function (done) {
        request(app)
            .delete(`/user/${testData._idDelete}`)
            .expect(500)
            .end( async (err, res) => {
                const orEqual = res.text == 'Invalid format in Body' ||
                    res.text == 'User Failed to Delete'
                assert.equal(orEqual, true);
                done();
            })
    });

});