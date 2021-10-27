import styled from "styled-components";
import { Link as link } from "react-router-dom";

const SideBarRow = ({
  title,
  Icon,
  IconActive,
  showSidebar,
  setShowSidebar,
  changePage,
  setChangePage,
}) => {
  const changeType = () => {
    setShowSidebar(!showSidebar);
    setChangePage(title);
  };

  return (
    <Links onClick={changeType} to={title === "Home" ? `/` : `/${title}`}>
      <IconButtonContainer>
        {changePage === title ? <IconActive /> : <Icon />}
      </IconButtonContainer>
      <Title>{title}</Title>
    </Links>
  );
};

export default SideBarRow;

const Links = styled(link)`
  text-decoration: none;

  padding: 8px 25px;
  cursor: pointer;
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
