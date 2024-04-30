import React from "react";
import { Link } from "react-router-dom";
import { Group, Flex, Text, Anchor, Button, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import LangComboBox from "./LangComboBox.component";
import classes from "./../styles/footer.module.css";
import Logo from "./../assets/icons/LogoFooter.svg?react";
import Playstore from "./../assets/icons/getOnPlaystore.svg?react";
import AppStore from "./../assets/icons/getOnAppStore.svg?react";

import SocialFooterLink from "./SocialFooterLink.component";
import LINK from "../utils/LinkApp";
//type Props = {};

export default function Footer() {
  const breakpoint = useMediaQuery("(min-width: 915px)");
  const breakpointII = useMediaQuery("(max-width: 400px)");

  return (
    <>
      <footer className={classes.footer}>
        <div className={`inner ${classes.footerContainer}`}>
          <Group justify="space-between" w={"100%"}>
            <div className={classes.brand}>
              <Flex direction={"column"} align={"flex-start"}>
                <Group gap={5}>
                  <Link to={"/"} className="brandLink">
                    <Logo width={breakpointII ? 40 : 70} />
                  </Link>
                  <Text fz={"1.5em"}>
                    <span className="brandLabel">ChairRental</span>
                    <i>Express</i>
                  </Text>
                </Group>
                <Text c={"dark"}>Follow us on our social pages vamvam</Text>
                <SocialFooterLink />
              </Flex>
            </div>
            <Group justify="space-between" w={breakpoint ? "50%" : undefined}>
              <Flex direction={"column"} gap={10}>
                <Title order={4}>About</Title>
                <Anchor
                  component={Link}
                  to={LINK.FAQ.path}
                  className={classes.Link}
                >
                  FAQ
                </Anchor>
                <Anchor component={Link} to="#" className={classes.Link}>
                  Tems and Conditions
                </Anchor>
                <Anchor component={Link} to="#" className={classes.Link}>
                  Privacy Policy
                </Anchor>
              </Flex>
              <Flex direction={"column"} gap={10}>
                <Title order={4}>Working Together</Title>
                <Anchor
                  component={Link}
                  to={LINK.USERACCOUNT.SIGNIN.path}
                  className={classes.Link}
                >
                  Create an Account
                </Anchor>
                <Anchor component={Link} to="#" className={classes.Link}>
                  Become a Logistics Services Partner
                </Anchor>
                <Anchor component={Link} to="#" className={classes.Link}>
                  Contact us
                </Anchor>
              </Flex>
            </Group>

            <Flex direction={"column"} gap={18}>
              <Title order={4}>Get app</Title>
              <Button
                component="a"
                style={{ background: "black" }}
                href="#"
                target="_blank"
              >
                <AppStore />
              </Button>
              <Button
                component="a"
                href="#"
                style={{ background: "black" }}
                target="_blank"
              >
                <Playstore />
              </Button>
            </Flex>
          </Group>
        </div>
      </footer>
      <div className={"inner " + classes.footerBottom}>
        <Group justify="space-between" style={{ width: "100%" }} mb={21}>
          <Text size={breakpointII ? "md" : "lg"} c={"gray"}>
            © 2023 Ecommerce.{" "}
          </Text>
          <LangComboBox />
        </Group>
      </div>
    </>
  );
}
