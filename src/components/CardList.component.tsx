import React from "react";
import { Box, Text, Flex, Group, MantineStyleProp, Title } from "@mantine/core";
import classes from "./../styles/cardlist.module.css";
import classe from "./../styles/card.module.css";
import { useMediaQuery } from "@mantine/hooks";

import TruckLogo from "./../assets/icons/Truck.svg?react";
import ChartBreakOut from "./../assets/icons/chart-breakout-circle.svg?react";
import HeadPhone from "./../assets/icons/headphones.svg?react";

const boxBg: MantineStyleProp = {};
type cardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function CardElement({ Icon, title, description }: cardProps) {
  const breakpoint = useMediaQuery("(max-width: 725px)");
  const breakpointII = useMediaQuery("(max-width: 400px)");
  return (
    <Box
      style={boxBg}
      className={
        classe["card-element"] + " " + classes["card-element-proprety"]
      }
    >
      <Flex gap={7} align={breakpointII ? "center" : "flex-start"} px={10}>
        <Icon />
        <Flex align="flex-start" direction="column">
          <Title order={breakpoint ? 5 : 4} className={classes.title}>
            {title}
          </Title>
          <Text lineClamp={breakpoint ? 1 : 2} className={classe["t-card"]}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

//type Props = {};
function CardList() {
  const breakpoint = useMediaQuery("(max-width: 725px)");
  const breakpointII = useMediaQuery("(max-width: 400px)");

  return (
    <Group
      justify="space-between"
      my={breakpoint ? 15 : 42}
      w={"100%"}
      wrap="nowrap"
      className={classes["ctn-card"]}
      gap={breakpoint ? 5 : undefined}
    >
      <CardElement
        Icon={() => (
          <TruckLogo width={breakpointII ? 40 : breakpoint ? 90 : 50} />
        )}
        title="Free Shipping"
        description="Free shipping on all Us order or order above $200"
      />
      <CardElement
        Icon={() => (
          <ChartBreakOut width={breakpointII ? 40 : breakpoint ? 90 : 50} />
        )}
        title="Stop With Confiance"
        description=" Our Protection covers your purchase from click to delivery"
      />
      <CardElement
        Icon={() => (
          <HeadPhone width={breakpointII ? 40 : breakpoint ? 90 : 50} />
        )}
        title="24/7 Help Center"
        description="Round-the-clock assistance for a smooth shopping experience"
      />
    </Group>
  );
}

export default CardList;
