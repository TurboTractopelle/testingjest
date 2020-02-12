const date = require("date-and-time");

/**
 * @param  {String} str "YYYY-MM-DDTHH:mm:ss"
 * @returns {Date}
 */
const parseDT = str =>
  date.parse(str, "YYYY-MM-DDTHH:mm:ss", false);

module.exports = parseDT;
