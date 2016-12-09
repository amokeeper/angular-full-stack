/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cianalysis              ->  index
 */

'use strict';
var _ = require('lodash');
var CiAnalysis = require('./cianalysis.model');
// Gets a list of Cianalysiss
exports.index = function(req, res) {
   CiAnalysis.find(function (err, cianalysis) {
    if(err) { return handleError(res, err); }
    return res.json(200, cianalysis);
  });
};


// Creates a new analysis in the DB.
exports.create = function(req, res) {
  CiAnalysis.create(req.body, function(err, cianalysis) {
    if(err) { return handleError(res, err); }
    return res.json(201, cianalysis);
  });
};


exports.destroy = function(req, res) {
  CiAnalysis.findById(req.params.id, function (err, cianalysis) {
    if(err) { return handleError(res, err); }
    if(!cianalysis) { return res.send(404); }
    cianalysis.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};


