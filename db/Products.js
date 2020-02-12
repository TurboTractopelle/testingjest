const mongoose = require("mongoose");
const connection = require("./connection");

const productSchema = new mongoose.Schema({
  product: {
    version: String,
    datetime: Date,
    datatype: String,
    name: String,
    owner: String,
    type: { type: String }
  },
  history: {
    pdfname: String,
    ppdfname: String,
    sdfname: String,
    rawdatafiles: [Object],
    scheduler: {
      datetime: Date,
      task: [Object]
    }
  },
  data: {
    time: String,
    date: String,
    datetime: Date,
    viewparams: {
      clfilter: String,
      timesamp: Number,
      prf: Number,
      disprange: Number,
      dispres: Number,
      sriheight: Number,
      zrrel: String,
      zrrelParams: Object,
      algtype: String
    },
    sensorinfo: {
      type: { type: String },
      id: String,
      name: String,
      lon: Number,
      lat: Number,
      alt: Number,
      wavelen: Number,
      beamwidth: Number
    },
    radarpicture: {
      placeid: String,
      type: { type: String },
      min: Number,
      name: String,
      max: Number,
      datamap: {
        blobid: Number,
        rows: Number,
        columns: Number,
        depth: Number
      },
      flagmap: {
        blobid: Number,
        rows: Number,
        columns: Number,
        depth: Number,
        flag: [Object]
      },
      projection: {
        lat_lr: Number,
        lat_ul: Number,
        type: { type: String },
        lon_lr: Number,
        size_x: Number,
        size_y: Number,
        lon_ul: Number,
        lon_0: Number,
        lat_0: Number,
        ellps: String,
        datum: String
      }
    },
    datainfo: {
      Object
    }
  },
  rasterImage: [Number]
});

productSchema.statics.searchLatestDates = searchLatestDates;

/**
 * @param  {Number} rastersNb=5 number of latest dates to fetch
 * @returns {Promise}
 */
async function searchLatestDates(
  rastersNb = +process.env.RASTER_IMAGE_NUMBER_REAL_TIME
) {
  let latestDates = this.find(
    {},
    {
      rasterImage: 0,
      history: 0,
      product: 0,
      history: 0,
      "data.radarpicture": 0,
      "data.sensorinfo": 0,
      "data.viewparams": 0
    }
  )
    .sort({ "data.datetime": 1 })
    .limit(rastersNb);

  return await latestDates;
}

mongoose.pluralize(null);
//const Sri = connection.model("sri", productSchema);
const Dpsri = connection.model("dpsri", productSchema);

module.exports = Dpsri;
