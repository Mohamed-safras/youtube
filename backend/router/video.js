const express = require("express");
const router = express.Router();
const Video = require("../model/video.js");

router.get("/", async (req, res) => {
  try {
    const video = await Video.find();
    res.status(200).json(video);
  } catch (error) {
    res.status(404).json({ msg: `${error.message}` });
  }
});

//post video
router.post("/", async (req, res) => {
  const {
    videoTitle,
    channel_name,
    channel_logo,
    views,
    created_at,
    tumnailImage,
  } = req.body;
  const videos = await new Video({
    videoTitle,
    channel_name,
    channel_logo,
    views,
    created_at,
    tumnailImage,
  });
  try {
    const video = await videos.save();
    res.status(200).json(video);
  } catch (error) {
    res.status(404).json({ msg: `${error.message}` });
  }
});

module.exports = router;
