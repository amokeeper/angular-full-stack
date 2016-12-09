'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CiAnalysisSchema = new Schema({
  appName: String,
  execCount: String,
  timeCount: String
});

module.exports = mongoose.model('CiAnalysis', CiAnalysisSchema);
