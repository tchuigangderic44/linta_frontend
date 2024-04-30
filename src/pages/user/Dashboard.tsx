import React from "react";
import {
  Title,
  Text,
  Card,
  Group,
  Avatar,
  Stack,
  Button,
  Box,
  Flex,
} from "@mantine/core";
import image from "./../../assets/users/customer call.webp";
import RocketIcon from "./../../assets/icons/rocket-icon.svg?react";
import ReceiptIcon from "./../../assets/icons/receipt-msg-icon.svg?react";
import PackageIcon from "./../../assets/icons/package-green.svg?react";
import ArrowRight from "./../../assets/icons/right-icon.svg?react";
import TableOrder from "../../components/TableOrder.component";
import { Link } from "react-router-dom";
import LINK from "../../utils/LinkApp";

import classes from "./../../styles/dashboard.module.css";
type boxTypes = {
  icon: React.ReactNode;
  value: number | string;
  description: string;
  bg: string;
};
function BoxItem({ bg, icon, value, description }: boxTypes) {
  return (
    <Box bg={bg} p={"xs"} miw={312}>
      <Group>
        <Group p={5} bg={"white"}>
          {icon}
        </Group>
        <Box>
          <Text fw={"bold"}>{value}</Text>
          <Text size="sm">{description}</Text>
        </Box>
      </Group>
    </Box>
  );
}
function Dashboard() {
  return (
    <>
      <Title order={4}>Hello, Kevin</Title>
      <Text c={"dark"} size="sm" my={"xs"}>
        From your account dashboard. you can easily check & view your ,
        <Text
          span
          component={Link}
          className="active"
          to={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path}
        >
          Recent Orders{" "}
        </Text>
        edit your{" "}
        <Text
          span
          component={Link}
          className="active"
          to={LINK.USERACCOUNT.DASHBOARD.path}
        >
          Password{" "}
        </Text>{" "}
        and{" "}
        <Text
          span
          component={Link}
          className="active"
          to={LINK.USERACCOUNT.DASHBOARD.path}
        >
          Account Details
        </Text>{" "}
        .
      </Text>
      <Group align="flex-start"> 
        <Card withBorder className={classes["account-info"]}>
          <Card.Section withBorder p={"xs"}>
            <Text tt={"uppercase"}>Account Info</Text>
          </Card.Section>
          <Group mt={"md"} gap={"sm"}>
            <Avatar src={image} radius="xl" />
            <Stack gap={0}>
              <Text size="sm" fw={500}>
                Kevin Gilbert
              </Text>

              <Text c="dimmed" size="xs">
                Dhaka - 1207, Bangladesh
              </Text>
            </Stack>
          </Group>
          <Text size="sm" mt={"xs"}>
            <Text span>Email:&ensp;</Text>{" "}
            <Text span c={"gray"}>
              kevin.gilbert@gmail.com
            </Text>
          </Text>
          <Text size="sm" mb={"xs"}>
            <Text span>Phone:&ensp;</Text>{" "}
            <Text span c={"gray"}>
              +1 202 555 0118
            </Text>
          </Text>
          <Button variant="outline" w={"fit-content"}>
            EDIT ACCOUNT
          </Button>
        </Card>
        <Stack gap={"xs"} className={classes["box-data"]}>
          <BoxItem
            icon={<RocketIcon />}
            bg="#EAF6FE"
            value={154}
            description="Total Orders"
          />
          <BoxItem
            icon={<ReceiptIcon />}
            bg="#FFF3EB"
            value={"05"}
            description="In Process Orders"
          />
          <BoxItem
            icon={<PackageIcon />}
            bg="#EAF7E9"
            value={149}
            description="Completed Orders"
          />
        </Stack>
      </Group>
      <Group justify="space-between" w={"100%"} my={"sm"}>
        <Text tt={"uppercase"}>Recent Order</Text>
        <Flex
          gap={"xs"}
          align={"center"}
          component={Link}
          to={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path}
          c={"orange"}
        >
          <Text>View All</Text>
          <ArrowRight className={classes["icon-orange-path"]} />
        </Flex>
      </Group>
      <TableOrder n={6} />
    </>
  );
}

export default Dashboard;
