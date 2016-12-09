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


