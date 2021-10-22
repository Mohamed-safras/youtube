import React, { useState } from "react";
import {
  NavContainer,
  NavSmallContainer,
  NavLeft,
  NavMiddle,
  NavRight,
  MenuIcon,
  Img,
  LogoConatiner,
  IconConatiner,
  Form,
  InputContainer,
  Input,
  SearchBtn,
  SearchContainer,
  MicContainer,
  MicButton,
  ProfileContainer,
  ProfileImage,
  VideoCallIconBtn,
  AppsIconBtn,
  NotificationsNoneOutlinedIconBtn,
  SearchIconBtn,
  MicIcnButton,
  IconSearchMicConatiner,
  BackBtnContainer,
  ArrowBackIconbtn,
  CloseIconBtn,
} from "../styles/Nav.style";
import { IconButton } from "@mui/material";
import Loading from "./SkeletonLoading/Loading";
const Nav = ({ showSidebar, setShowSidebar, loading }) => {
  const [changeSearchBar, setChangeSearchBar] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      {changeSearchBar ? (
        <SmallScreenNav
          data={data}
          setData={setData}
          input={input}
          setInput={setInput}
          changeSearchBar={changeSearchBar}
          setChangeSearchBar={setChangeSearchBar}
        />
      ) : (
        <NavContainer>
          <NavBarLeftContainer
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <NavMiddle>
            <FormInputContainer
              data={data}
              setData={setData}
              input={input}
              setInput={setInput}
            />
          </NavMiddle>
          {loading ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <SmallScreenNavIcon
                changeSearchBar={changeSearchBar}
                setChangeSearchBar={setChangeSearchBar}
              />
              <Loading />
            </div>
          ) : (
            <NavBarRightContainer
              changeSearchBar={changeSearchBar}
              setChangeSearchBar={setChangeSearchBar}
            />
          )}
        </NavContainer>
      )}
    </>
  );
};

export default Nav;

const SmallScreenNav = ({
  changeSearchBar,
  setChangeSearchBar,
  input,
  setInput,
  data,
  setData,
}) => (
  <NavSmallContainer>
    <BackBtnContainer>
      <IconButton onClick={() => setChangeSearchBar(!changeSearchBar)}>
        <ArrowBackIconbtn />
      </IconButton>
    </BackBtnContainer>
    <>
      <FormInputContainer
        data={data}
        setData={setData}
        input={input}
        setInput={setInput}
      />
    </>
  </NavSmallContainer>
);

const FormInputContainer = ({ input, setInput, data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setData([...data, input]);
    }
    setInput("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          {input && <CloseIconBtn onClick={() => setInput("")} />}
        </InputContainer>
        <SearchContainer type="submit">
          <SearchBtn />
        </SearchContainer>
      </Form>
      <MicContainer>
        <MicButton />
      </MicContainer>
    </>
  );
};

export const NavBarLeftContainer = ({ showSidebar, setShowSidebar }) => (
  <NavLeft>
    <IconConatiner>
      <IconButton onClick={() => setShowSidebar(!showSidebar)}>
        <MenuIcon />
      </IconButton>
    </IconConatiner>
    <LogoConatiner>
      <Img
        src={
          process.env.PUBLIC_URL + "/assets/The-official-YouTube-logo-PNG.png"
        }
      />
    </LogoConatiner>
  </NavLeft>
);

const SmallScreenNavIcon = ({
  changeSearchBar,
  setChangeSearchBar,
  noLoading,
}) => (
  <>
    <IconSearchMicConatiner>
      <IconButton onClick={() => setChangeSearchBar(!changeSearchBar)}>
        <SearchIconBtn />
      </IconButton>
    </IconSearchMicConatiner>
    {noLoading && (
      <IconSearchMicConatiner>
        <IconButton>
          <MicIcnButton />
        </IconButton>
      </IconSearchMicConatiner>
    )}
  </>
);

const NavBarRightContainer = ({ changeSearchBar, setChangeSearchBar }) => (
  <NavRight>
    <SmallScreenNavIcon
      changeSearchBar={changeSearchBar}
      setChangeSearchBar={setChangeSearchBar}
      noLoading="true"
    />
    <IconConatiner>
      <IconButton>
        <VideoCallIconBtn />
      </IconButton>
    </IconConatiner>
    <IconConatiner>
      <IconButton>
        <AppsIconBtn />
      </IconButton>
    </IconConatiner>
    <IconConatiner>
      <IconButton>
        <NotificationsNoneOutlinedIconBtn />
      </IconButton>
    </IconConatiner>
    <ProfileContainer>
      <ProfileImage src="https://yt3.ggpht.com/DQCsSMJ2h4370ADjTbrIB3wck3WNwRXtD2mij_X1B43JmGXgrtbgv9Cr9S0xpTxE4-rMxkyrzQ=s88-c-k-c0x00ffffff-no-rj-mo" />
    </ProfileContainer>
  </NavRight>
);
