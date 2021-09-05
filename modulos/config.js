exports.config = function() {
  var envJSON = require('../config/variables.json');
  var node_env = process.env.NODE_ENV || 'development';
  return envJSON[node_env];
}