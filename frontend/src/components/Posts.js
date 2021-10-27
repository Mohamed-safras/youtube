import React from "react";
import Post from "./Post";
import styled from "styled-components";

const Posts = ({ video }) => {
  return (
    <Container>
      {video.length > 0 ? (
        <>
          {video.map((video) => {
            const {
              _id,
              videoTitle,
              tumnailImage,
              channel_name,
              channel_logo,
              created_at,
              views,
            } = video;
            return (
              <Post
                key={_id}
                videoTitle={videoTitle}
                tumnailImage={tumnailImage}
                channel_name={channel_name}
                channel_logo={channel_logo}
                createdDate={created_at}
                views={views}
              />
            );
          })}
        </>
      ) : null}
    </Container>
  );
};

export default Posts;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 70%;
    margin: auto;
  }
`;
