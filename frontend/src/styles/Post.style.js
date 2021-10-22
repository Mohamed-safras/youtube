import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  margin-top: 25px;
  width: 319px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const PostThumbnail = styled.div`
  width: 320px;
  height: 200px;
  position: relative;
  animation: ${({ loading }) =>
    loading ? "loading 0.5s  infinite alternate" : ""};
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
  @media screen and (max-width: 700px) {
    width: ${({ loading }) => (loading ? "320px" : "100%")};
  }
`;

export const PostThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostBottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 319px;
  justify-content: space-between;
  margin-top: 5px;
  @media screen and (max-width: 700px) {
    width: ${({ loading }) => (loading ? "319px" : "100%")};
  }
`;
export const ChannelContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex: 0.1;
  display: flex;
`;
export const ChannelLogo = styled.div`
  width: 36px;
  height: 36px;

  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const VideoDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  flex: 0.8;
  margin-left: 10px;
  width: 320px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const IconConatiner = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

export const VideoTitle = styled.h4`
  color: #fff;
  flex: 1;
  font-size: 14px;
  font-family: "Roboto", "Arial", sans-sans-serif;
  line-height: 1.2rem;
  overflow: hidden;
  max-height: 4rem;
  font-weight: 500;
  cursor: pointer;
`;
export const ChannelName = styled.p`
  color: #aaaaaa;
  font-size: 14px;
  margin-top: 0.3rem;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;
export const VideoViews = styled.p`
  font-size: 14px;
  margin-top: 0.1rem;
  color: #aaaaaa;
  cursor: pointer;
`;
