import React from "react";
import { Table, Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import ArrowRight from "./../assets/icons/right-icon.svg?react";
import LINK from "../utils/LinkApp";

type orderProps = {
  n?: number;
};
type statusType = "COMPLETED" | "CANCELED" | "IN PROGRESS";
type tableProps = {
  orderId: number;
  status: statusType;
  date: string;
  total: number;
};

const datas: tableProps[] = [
  {
    orderId: 2133234,
    date: Date(),
    total: 80,
    status: "CANCELED",
  },
  {
    orderId: 21334,
    date: Date(),
    total: 80,
    status: "IN PROGRESS",
  },
  {
    orderId: 213323234,
    date: Date(),
    total: 80,
    status: "COMPLETED",
  },
];

function TableOrder({ n }: orderProps) {
  const rows = datas
    .map((d) => (
      <Table.Tr key={d.orderId}>
        <Table.Td>{d.orderId}</Table.Td>
        <Table.Td
          c={
            d.status == "CANCELED"
              ? "red"
              : d.status == "COMPLETED"
              ? "green"
              : d.status == "IN PROGRESS"
              ? "orange"
              : undefined
          }
        >
          {d.status}
        </Table.Td>
        <Table.Td>{d.date}</Table.Td>
        <Table.Td>{d.total}</Table.Td>
        <Table.Td>
          <Flex
            gap={"xs"}
            align={"center"}
            component={Link}
            to={LINK.USERACCOUNT.DASHBOARD.ORDERHISTORY.path + "/" + d.orderId}
            className="active"
          >
            <Text>View All</Text>
            <ArrowRight />
          </Flex>
        </Table.Td>
      </Table.Tr>
    ))
    .slice(0, n);
  return (
    <Table
      stickyHeader
      stickyHeaderOffset={"calc(var(--header-height) + 0px)"}
      striped
      borderColor="lightgray"
    >
      <Table.Thead
        bg={"#E4E7E9"}
        tt={"uppercase"}
        /* styles={{
          thead: {
            border: "1px solid lightgray",
          },
        }} */
      >
        <Table.Tr>
          <Table.Th fw={"normal"}>ORDER ID</Table.Th>
          <Table.Th fw={"normal"}>STATUS</Table.Th>
          <Table.Th fw={"normal"}>DATE</Table.Th>
          <Table.Th fw={"normal"}>TOTAL</Table.Th>
          <Table.Th fw={"normal"}>ACTION</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default TableOrder;
