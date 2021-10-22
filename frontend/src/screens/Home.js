import React, { useState } from "react";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import SideBar from "../components/SideBar";
import { Container } from "../styles/Home.style";
const Home = ({ video, loading }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container>
      <Nav
        loading={loading}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Overlay showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Feed video={video} />
    </Container>
  );
};

export default Home;
