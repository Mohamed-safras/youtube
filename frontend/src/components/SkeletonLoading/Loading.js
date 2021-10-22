import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBarLoading />
      <NavBarLoading />
      <NavBarLoading />
      <NavBarLoading />
    </div>
  );
};

const NavBarLoading = () => {
  return <Container />;
};

export default Loading;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
  animation: Loading 0.5s infinite alternate;

  @keyframes Loading {
    0% {
      background-color: hsl(0, 0%, 25%);
      opacity: 0.7;
    }
    100% {
      background-color: hsl(0, 0%, 25%);
      opacity: 1;
    }
  }
`;
