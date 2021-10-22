import React from "react";
import styled from "styled-components";
import SideBarRow from "./SideBarRow";
import { ReactComponent as home } from "../styles/icons/home.svg";
import { ReactComponent as explore } from "../styles/icons/explore.svg";
import { ReactComponent as subscription } from "../styles/icons/subcription.svg";
import { ReactComponent as library } from "../styles/icons/library.svg";
import { ReactComponent as history } from "../styles/icons/history.svg";
import { ReactComponent as yourvideo } from "../styles/icons/your-videos.svg";
import { ReactComponent as watchlater } from "../styles/icons/watch-later.svg";

const sidebarrow = [
  {
    id: 1,
    title: "Home",
    icon: home,
  },
  {
    id: 2,
    title: "Explore",
    icon: explore,
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: subscription,
  },
  {
    id: 4,
    title: "Library",
    icon: library,
  },
  {
    id: 5,
    title: "History",
    icon: history,
  },
  {
    id: 6,
    title: "Your videos",
    icon: yourvideo,
  },
  {
    id: 7,
    title: "watch later",
    icon: watchlater,
  },
];

const SideBarRows = ({ showSidebar, setShowSidebar }) => {
  return (
    <Container>
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id < 4;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      <Border />
      {sidebarrow
        .filter((item) => {
          return item.id > 3 && item.id < 8;
        })
        .map((item) => (
          <SideBarRow
            key={item.id}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            title={item.title}
            Icon={item.icon}
          />
        ))}
    </Container>
  );
};

export default SideBarRows;

const Container = styled.div`
  margin-top: 10px;
`;

const Border = styled.div`
  border-top: 1px solid rgb(255 255 255 / 10%);
  margin-top: 12px;
  padding-top: 12px;
  display: block;
`;
