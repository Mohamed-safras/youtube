import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  PostContainer,
  PostThumbnail,
  PostThumbnailImage,
  PostBottomContainer,
  ChannelLogo,
  VideoDescriptionContainer,
  ChannelContainer,
  Image,
  IconConatiner,
  VideoTitle,
  ChannelName,
  VideoViews,
} from "../styles/Post.style";

const Post = ({
  videoTitle,
  tumnailImage,
  channel_name,
  channel_logo,
  createdDate,
  views,
}) => {
  return (
    <PostContainer>
      <PostHeader tumnailImage={tumnailImage} />
      <PostBottom
        videoTitle={videoTitle}
        channel_name={channel_name}
        channel_logo={channel_logo}
        createdDate={createdDate}
        views={views}
      />
    </PostContainer>
  );
};

export default Post;

const PostHeader = ({ tumnailImage }) => (
  <PostThumbnail>
    <PostThumbnailImage src={tumnailImage} />
  </PostThumbnail>
);

const PostBottom = ({
  videoTitle,
  channel_name,
  channel_logo,
  createdDate,
  views,
}) => (
  <PostBottomContainer>
    <ChannelContainer>
      <ChannelLogo>
        <Image src={channel_logo} />
      </ChannelLogo>
    </ChannelContainer>
    <VideoDescriptionContainer>
      <VideoTitle>
        {videoTitle.length > 65 ? videoTitle.slice(0, 60) + `...` : videoTitle}
      </VideoTitle>
      <ChannelName>{channel_name}</ChannelName>
      <VideoViews>
        <span>
          {views > 1000000
            ? `${Math.floor(views / 1000000)}M`
            : views > 1000
            ? `${views / 1000}K`
            : views}{" "}
          views
        </span>{" "}
        • <span> {createdDate} months ago </span>
      </VideoViews>
    </VideoDescriptionContainer>
    <IconConatiner>
      <MoreVertIcon />
    </IconConatiner>
  </PostBottomContainer>
);
