module.exports = function(content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('\n');
  console.log('remainingRequest: ' + remainingRequest);
  console.log('precedingRequest: ' + precedingRequest);
  console.log('data: ' + JSON.stringify(data) + '\n');

  //return "module.exports = require(" + JSON.stringify("-!" + remainingRequest) + ");";
};

function someAsyncOperation(content, callback) {
  console.log('\n');
  console.log(content);
  console.log('\n');

  callback(null, 'freee\n' + content);
}
