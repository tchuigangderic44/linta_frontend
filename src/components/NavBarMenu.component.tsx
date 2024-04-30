import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Group, Menu, Button, Box } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { Indicator } from "@mantine/core";
import LangComboBox from "./LangComboBox.component";
import classes from "./../styles/navbar.module.css";
import classeHeader from "./../styles/header.module.css";

import Profile from "./../assets/icons/Profile.svg?react";
import Cart from "./../assets/icons/Cart.svg?react";
import CmFlag from "./../assets/icons/flagcm.svg?react";
import MenuIcon from "./../assets/icons/menu.svg?react";
import LINK from "../utils/LinkApp";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
function NavBarMenu() {
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const location=useLocation()
  const path=LINK.USERACCOUNT.DASHBOARD.path
  const loc=location.pathname
  return (
    <nav className={classes.navbar+" "+(loc.includes(path)?classes["nav-hidden"]:"")}>
      <Box className={classes.navcontent} visibleFrom="xs">
        <Menu
          width={200}
          position="bottom-start"
          offset={15}
          arrowPosition="center"
        >
          <Menu.Target>
            <Button
              variant="transparent"
              color="var(--secondary-color)"
              className="defaultBtn"
              size="compact-md"
              fw={"normal"}
              pl={0}
              leftSection={<MenuIcon />}
            >
              All category
            </Button>
          </Menu.Target>
          {/* <Menu.Dropdown>
    <Menu.Label>Application</Menu.Label>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Item>Messages</Menu.Item>
    <Menu.Item>Gallery</Menu.Item>
    <Menu.Item>Search</Menu.Item>

    <Menu.Divider />

    <Menu.Label>Danger zone</Menu.Label>
    <Menu.Item>Transfer my data</Menu.Item>
    <Menu.Item color="red">Delete my account</Menu.Item>
  </Menu.Dropdown> */}
        </Menu>
        <Group justify="space-between">
          <ActionIcon
            component={Link}
            to={LINK.USERACCOUNT.path}
            size="xl"
            variant="transparent"
            className={classes.iconMobileHide}
          >
            <Profile />
          </ActionIcon>
          <Indicator
            size={15}
            offset={10}
            label={cart.length}
            className={classes.iconMobileHide}
          >
            <ActionIcon
              component={Link}
              to={LINK.CART.path}
              size="xl"
              variant="transparent"
            >
              <Cart />
            </ActionIcon>
          </Indicator>
          <NavLink to={LINK.CONTACT.path} className={classeHeader.linkHeader}>
            <span className={classes.linkLabel}>Help</span>
          </NavLink>
          <LangComboBox />
          <Group>
            Ship to
            <CmFlag />
          </Group>
        </Group>
      </Box>
    </nav>
  );
}

export default NavBarMenu;
