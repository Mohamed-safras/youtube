import React from "react";

import Posts from "./Posts";
import Loading from "./SkeletonLoading/Loading";

const Feed = ({ video, loading }) => {
  return (
    <div style={{ maxWidth: "90%", margin: "auto" }}>
      {loading ? <Loading type="PostLoading" /> : <Posts video={video} />}
    </div>
  );
};

export default Feed;
