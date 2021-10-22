import React from "react";
import { Container } from "../styles/SideBar.style";
import { NavBarLeftContainer } from "./Nav";
import SideBarRows from "./SideBarRows";
const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <Container showSidebar={showSidebar}>
      <div
        style={{
          padding: "0 10px",
          position: "sticky",
          top: "0",
          zIndex: 100,
          background: "#202020",
        }}
      >
        <NavBarLeftContainer
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <SideBarRows showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </Container>
  );
};

export default SideBar;
