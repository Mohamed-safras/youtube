import React from "react";

import Posts from "./Posts";

const Feed = ({ video }) => {
  return (
    <div style={{ maxWidth: "90%", margin: "auto" }}>
      <Posts video={video} />
    </div>
  );
};

export default Feed;
