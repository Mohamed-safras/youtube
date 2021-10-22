import React from "react";
import styled from "styled-components";
const Overlay = ({ showSidebar, setShowSidebar }) => {
  return (
    <OverlayContainer
      showSidebar={showSidebar}
      onClick={() => setShowSidebar(!showSidebar)}
    />
  );
};

export default Overlay;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  opacity: 0.3;
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0%)" : "translate(-100%)"};
  transition: all 0.1ms ease-in-out;
`;
