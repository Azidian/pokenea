const os = require('os');

function getContainerId() {
  return process.env.HOSTNAME || os.hostname() || 'localhost';
}

module.exports = {
  getContainerId
};
