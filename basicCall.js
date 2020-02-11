const myFunction = require("./myFunction");

function basicCall(a, b) {
  const out = myFunction(a, b);
  return out;
}

module.exports = basicCall;
