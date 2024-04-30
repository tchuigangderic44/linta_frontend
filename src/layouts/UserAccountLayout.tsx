import React, { useContext } from "react";
import { Box, Group, Card, NavLink } from "@mantine/core";

import { Link, Outlet, useLocation } from "react-router-dom";
import classes from "./../styles/user-layout.module.css";
import LINK from "../utils/LinkApp";
import DashboardIcon from "./../assets/icons/Stack.svg?react";
import OrderIcon from "./../assets/icons/store-front-icon.svg?react";
import GearIcon from "./../assets/icons/Gear.svg?react";
import LogOut from "./../assets/icons/SignOut.svg?react";
import { Context } from "../context/context";

function UserAccountLayout() {
  const location = useLocation();
  const d = useContext(Context);

  return (
    <Group
      align="flex-start"
      justify="space-between"
      className={classes["wrapper"]}
      gap={"sm"}
    >
      <Card
        withBorder
        p={0}
        className={classes["nav-wrapper"]}
        radius={"xs"}
        pos={"sticky"}
        top={"calc(var(--header-height) + 5px)"}
      >
        {" "}
        <NavLink
          className={classes["nav-link"]}
          component={Link}
          to={LINK.USERACCOUNT.DASHBOARD.path}
          label={LINK.USERACCOUNT.DASHBOARD.name}
          active={LINK.USERACCOUNT.DASHBOARD.path === location.pathname}
          variant="filled"
          leftSection={<DashboardIcon />}
        />
        <NavLink
          component={Link}
          className={classes["nav-link"]}
          to={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path}
          label={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.name}
          active={location.pathname.includes(
            LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path
          )}
          variant="filled"
          leftSection={<OrderIcon />}
        />
        <NavLink
          component={Link}
          className={classes["nav-link"]}
          to={LINK.USERACCOUNT.DASHBOARD.SETTING.path}
          label={LINK.USERACCOUNT.DASHBOARD.SETTING.name}
          active={LINK.USERACCOUNT.DASHBOARD.SETTING.path === location.pathname}
          variant="filled"
          leftSection={<GearIcon />}
        />
        <NavLink
          component={Link}
          className={classes["nav-link"]}
          to={"#"}
          label={"Log-out"}
          variant="filled"
          leftSection={<LogOut />}
          onClick={() => d?.doSignOut()}
        />
      </Card>
      <Box className={classes["content"]}>
        <Outlet />
      </Box>
    </Group>
  );
}

export default UserAccountLayout;
