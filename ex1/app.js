const maths = require("./maths");

exports.doAdd = (a, b) => maths.add(a, b);
exports.doAdd2 = (a, b) => 2;
exports.doSubtract = (a, b) => maths.subtract(a, b);
exports.doMultiply = (a, b) => maths.multiply(a, b);
exports.doDivide = (a, b) => maths.divide(a, b);
