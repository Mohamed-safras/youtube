import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subcription from "./screens/Subcription";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Overlay from "./components/Overlay";
export default function App() {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const getPost = async () => {
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
    <Router>
      <Nav
        loading={loading}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Overlay showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Switch>
        <Route exact path="/">
          <Home
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            video={video}
            loading={loading}
          />
        </Route>
        <Route exact path="/Explore">
          <Explore showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Route>
        <Route exact path="/Subscriptions">
          <Subcription />
        </Route>
      </Switch>
    </Router>
  );
}
