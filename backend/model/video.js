const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoTitle: {
    type: "string",
    required: true,
    trim: true,
  },
  channel_name: {
    type: "string",
    required: true,
  },
  channel_logo: {
    type: "string",
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  tumnailImage: {
    type: "string",
    required: true,
  },
  created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("videoSchema", videoSchema);
