import styled from "styled-components";
import { backgroundColor } from "../styles/colors/Color";
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: ${backgroundColor};
  z-index: 11;
  transition: all 0.35s ease-in-out;
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0%)" : "translateX(-100%)"};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
    width: 10px;
  }
  &:hover {
    ::-webkit-scrollbar {
      display: inline-block;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #202020;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 50px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #666;
    }
  }
`;
