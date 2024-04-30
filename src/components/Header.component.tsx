import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Autocomplete,
  Group,
  Burger,
  ActionIcon,
  Text,
  Drawer,
  Stack,
  Indicator,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "../styles/header.module.css";
import Logo from "./../assets/icons/Logoheader.svg?react";
import Profile from "./../assets/icons/account.svg?react";
import Cart from "./../assets/icons/cartOutline.svg?react";
import LINK from "../utils/LinkApp";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const links = [
  { href: LINK.HOME.path, label: LINK.HOME.name },
  { href: LINK.SHOP.path, label: LINK.SHOP.name },
  { href: LINK.CONTACT.path, label: LINK.CONTACT.name },
];
function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const location = useLocation();

  useEffect(() => {
    if (opened) {
      toggle();
    }
  }, [location.pathname]);
  const items = links.map((link) => (
    <NavLink key={link.label} to={link.href} className={classes.linkHeader}>
      {link.label}
    </NavLink>
  ));
  const breakpointI = useMediaQuery("(min-width: 515px)");
  const breakpointII = useMediaQuery("(max-width: 350px)");
  const breakpointIII = useMediaQuery("(max-width: 320px)");
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        title={
          <Link to={"/"} className="brandLink">
            <Group gap={5}>
              <Logo height={breakpointI ? 70 : 40} />
              <Text fz={breakpointI ? "1.7em" : "1.2em"}>
                <span className="brandLabel">ChairRental</span>
                <i>Express</i>
              </Text>
            </Group>
          </Link>
        }
      >
        <Stack>
          {items}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            visibleFrom="xs"
            radius={"xl"}
          />
        </Stack>
      </Drawer>
      <header className={classes.header}>
        <div className="inner">
          <Group gap={breakpointII ? 0 : undefined} wrap="nowrap">
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.navDrawerMobile}
            />
            <Link to={"/"} className="brandLink">
              <Group gap={0}>
                <Logo
                  height={70}
                  style={{ display: breakpointI ? "block" : "none" }}
                />
                <Text
                  size={
                    breakpointIII ? "1.1em" : breakpointI ? "1.7em" : "1.3em"
                  }
                >
                  <span className="brandLabel">ChairRental</span>
                  <i>Express</i>
                </Text>
              </Group>
            </Link>
          </Group>
          <Group className={classes.navLinkMobile} wrap="nowrap" gap={0}>
            <Indicator size={15} offset={10} label={cart.length}>
              <ActionIcon
                component={Link}
                to={LINK.CART.path}
                size="xl"
                variant="transparent"
              >
                <Cart />
              </ActionIcon>
            </Indicator>

            <ActionIcon
              component={Link}
              to={LINK.USERACCOUNT.path}
              size="xl"
              variant="transparent"
            >
              <Profile />
            </ActionIcon>
          </Group>
          <Group gap={40} wrap="nowrap" className={classes.navDesktop}>
            {items}
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              visibleFrom="xs"
              radius={"xl"}
            />
          </Group>
        </div>
      </header>
    </>
  );
}

export default Header;
