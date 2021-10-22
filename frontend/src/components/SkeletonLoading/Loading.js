import React from "react";
import styled from "styled-components";
import {
  PostContainer,
  PostThumbnail,
  PostBottomContainer,
} from "../../styles/Post.style";
const Loading = ({ type }) => {
  if (type === "navloading") return Array(4).fill(<NavBarLoading />);
  if (type === "PostLoading") return Array(4).fill(<PostLoading />);
};
export default Loading;

// navloading
const NavBarLoading = () => {
  return (
    <NavLoadingContainer>
      <Container />
    </NavLoadingContainer>
  );
};

const NavLoadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
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

const PostLoading = () => (
  <PostContainer style={{ height: "250px", display: "flex" }}>
    <PostThumbnail loading />
    <PostBottomContainer loading>
      <ChannelLoadngLogo />
      <VideoDescriptionLoading>
        <TextConatiner style={{ marginBottom: "5px" }} />
        <TextConatiner shortText />
      </VideoDescriptionLoading>
    </PostBottomContainer>
  </PostContainer>
);

const VideoDescriptionLoading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  /* width: 100%; */
  margin-left: 10px;
  flex: 1;
`;
const ChannelLoadngLogo = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  animation: loading 0.5s infinite alternate;
  @keyframes loading {
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

const TextConatiner = styled.div`
  height: 20px;
  width: ${({ shortText }) => (shortText ? "60%" : "90%")};
  background: #fff;

  animation: loading 0.5s infinite alternate;
  @keyframes loading {
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
