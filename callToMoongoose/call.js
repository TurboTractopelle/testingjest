const Dpsri = require("../db/Products");

/**
 * @typedef {Object} DateData
 * @property {Object} data
 * @property {String} data.time "10:27:31"
 * @property {String} data.date "2019-08-06"
 * @property {ObjectId} _id
 */

/**
 * @param  {DateData} itemDate
 * @returns {Promise<String>} Link to generated png
 */
async function generateImage(itemDate) {
  return new Promise(async (res, err) => {
    const rawData = await Dpsri.findById(itemDate._id);

    const arr = rawData.rasterImage;
    const size =
      rawData.data.radarpicture.projection.size_x;
    console.log(arr.length, size);
    res(size);
  });
}

module.exports = generateImage;
