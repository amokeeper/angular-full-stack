'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cianalysisCtrlStub = {
  index: 'cianalysisCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var cianalysisIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './cianalysis.controller': cianalysisCtrlStub
});

describe('Cianalysis API Router:', function() {
  it('should return an express router instance', function() {
    cianalysisIndex.should.equal(routerStub);
  });

  describe('GET /api/cianalysis', function() {
    it('should route to cianalysis.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cianalysisCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
