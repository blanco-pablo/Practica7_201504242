var request = require('supertest');
var app = require('../index.js');
 
describe('GET /pruebas', function() {
  it('respond with hello', function(done) {
    request(app).get('/pruebas').expect('hello', done);
  });
});