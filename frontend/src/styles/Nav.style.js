import styled from "styled-components";
import Menu from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import {
  backgroundColor,
  whiteColor,
  borderColor,
  borderColorSecondary,
  searchColor,
} from "../styles/colors/Color";
export const NavContainer = styled.div`
  background-color: ${backgroundColor};
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 1;
  opacity: 0.99;
`;

export const NavSmallContainer = styled.div`
  background-color: ${backgroundColor};
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  overflow: hidden;
  position: sticky;
  z-index: 1;
  top: 0;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavMiddle = styled.div`
  width: 100%;
  display: flex;
  flex: 0.6;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 656px) {
    display: none;
  }
`;

export const IconConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
export const IconSearchMicConatiner = styled.div`
  display: none;
  @media screen and (max-width: 656px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`;

export const MenuIcon = styled(Menu)`
  color: ${whiteColor};
  font-size: 26px !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
  }
`;
export const LogoConatiner = styled.div`
  width: 70px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border: 1px solid ${borderColor};
  background-color: #121212;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: 100%;
`;
export const Input = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  padding: 0 5px;
  outline: none;
  font-size: 16px;
  height: 100%;
  color: #fff;
`;
export const SearchContainer = styled.button`
  background-color: ${borderColorSecondary};
  border: none;
  outline: none;
  width: 64px;
  height: 100%;
  color: ${searchColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchBtn = styled(Search)`
  font-size: 26px !important;
  color: ${whiteColor} !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
  }
`;
export const CloseIconBtn = styled(CloseIcon)`
  font-size: 26px !important;
  color: ${whiteColor} !important;
  cursor: pointer !important;
`;
export const MicContainer = styled.div`
  margin-left: 5px;
  color: hsla(0, 100%, 100%, 0.88);
  border-radius: 50%;
  background: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
`;
export const MicButton = styled(Mic)`
  color: ${whiteColor} !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
  }
`;

export const ProfileContainer = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (max-width: 376px) {
    width: 25px;
    height: 25px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export const VideoCallIconBtn = styled(VideoCallIcon)`
  color: ${whiteColor} !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
    margin-left: 0px;
  }
`;
export const AppsIconBtn = styled(AppsIcon)`
  color: ${whiteColor} !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
    margin-left: 0px;
  }
`;
export const NotificationsNoneOutlinedIconBtn = styled(
  NotificationsNoneOutlinedIcon
)`
  color: ${whiteColor} !important;
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
    margin-left: 0px;
  }
`;
export const SearchIconBtn = styled(Search)`
  color: ${whiteColor} !important;
  display: none !important;
  @media screen and (max-width: 773px) {
    display: block !important;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
    margin-left: 0px;
  }
`;
export const MicIcnButton = styled(Mic)`
  color: ${whiteColor} !important;
  display: none !important;
  @media screen and (max-width: 768px) {
    display: block !important;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px !important;
    margin-left: 0px;
  }
`;

export const BackBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArrowBackIconbtn = styled(ArrowBackIcon)`
  color: ${whiteColor} !important;
`;
