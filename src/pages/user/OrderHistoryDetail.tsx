import React from "react";
import BackIcon from "./../../assets/icons/ArrowLeft.svg?react";
import { Text, Flex, Box, Stack, Group } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import classes from "./../../styles/dashboard.module.css";
import StepperProducts from "../../components/StepperProducts.component";
import LINK from "../../utils/LinkApp";
import ProductTable from "../../components/ProductTable.component";
function OrderHistoryDetail() {
  const { id } = useParams();
  return (
    <Stack gap={5} className={classes["order-details-wrapper"]}>
      <Flex
        gap={"xs"}
        align={"center"}
        component={Link}
        to={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path}
        c={"black"}
      >
        <BackIcon className={classes["icon-black-path"]} width={20} />
        <Text>Order Details</Text>
      </Flex>
      <Box className={classes["overview-box"]} mt={"md"}>
        <Group justify="space-between">
          <Stack gap={0}>
            <Text size="lg" fw={"bold"}>
              #{id}
            </Text>
            <Text size="sm" c={"dark"}>
              <Text span>3 Products</Text>
              <Text span>Order Placed in 17 Jan, 2021 at 7:32 PM</Text>
            </Text>
          </Stack>
          <Text size="xl" className="active" fw={"bold"}>
            XAF 1199000
          </Text>
        </Group>
      </Box>
      <StepperProducts />
      <Text mt={60}>Products (02)</Text>
      <ProductTable />
    </Stack>
  );
}

export default OrderHistoryDetail;
