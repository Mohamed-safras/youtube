import Feed from "../components/Feed";

import { Container } from "../styles/Home.style";
const Home = ({ video, loading, setShowSidebar, showSidebar }) => {
  return (
    <Container>
      <Feed loading={loading} video={video} />
    </Container>
  );
};

export default Home;
