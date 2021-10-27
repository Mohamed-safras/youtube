import React, { useState } from "react";
import styled from "styled-components";
import SideBarRow from "./SideBarRow";
import { ReactComponent as homeFill } from "../styles/icons/home.svg";
import { ReactComponent as home } from "../styles/icons/homefill.svg";
import { ReactComponent as exploreactive } from "../styles/icons/exploreactive.svg";
import { ReactComponent as explore } from "../styles/icons/explore.svg";
import { ReactComponent as subscription } from "../styles/icons/subcription.svg";
import { ReactComponent as subscriptionactive } from "../styles/icons/subcriptionactive.svg";

const sidebarrow = [
  {
    id: 1,
    title: "Home",
    icon: home,
    iconActive: homeFill,
  },
  {
    id: 2,
    title: "Explore",
    icon: explore,
    iconActive: exploreactive,
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: subscription,
    iconActive: subscriptionactive,
  },
];

const SideBarRows = ({ showSidebar, setShowSidebar }) => {
  const [changePage, setChangePage] = useState("Home");
  return (
    <Container>
      {sidebarrow.map((item) => (
        <SideBarRow
          changePage={changePage}
          setChangePage={setChangePage}
          key={item.id.toString()}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          title={item.title}
          Icon={item.icon}
          IconActive={item.iconActive}
        />
      ))}
      <Border />
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
