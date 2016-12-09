'use strict';

var app = require('../..');
import request from 'supertest';

describe('Cianalysis API:', function() {
  describe('GET /api/cianalysis', function() {
    var cianalysiss;

    beforeEach(function(done) {
      request(app)
        .get('/api/cianalysis')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cianalysiss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cianalysiss.should.be.instanceOf(Array);
    });
  });
});
