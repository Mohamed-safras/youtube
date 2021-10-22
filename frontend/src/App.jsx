import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import axios from "axios";

export default function App() {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const video = await axios.get("/video");
        setVideo(video.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <div>
      <Home video={video} loading={loading} />
    </div>
  );
}
