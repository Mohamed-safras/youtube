import React from "react";
import styled from "styled-components";
const SideBarRow = ({ title, Icon, showSidebar, setShowSidebar }) => {
  return (
    <>
      <Container onClick={() => setShowSidebar(!showSidebar)}>
        <IconButtonContainer>{Icon && <Icon />}</IconButtonContainer>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default SideBarRow;

const Container = styled.div`
  padding: 8px 25px;
  cursor: pointer;
  transition: all 0.35ms ease-in-out;
  display: flex;
  align-items: center;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: #666;
  }
`;
const IconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
`;
