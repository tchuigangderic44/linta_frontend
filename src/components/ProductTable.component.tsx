import React from "react";
import { Table, Group, Text, Box, Image } from "@mantine/core";
import PhoneImage from "./../assets/products/0fde3cb34a30e1c40080fa607437adb64caa3545.png";
import AssetI from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";

type tableProps = {
  id: number;
  name: string;
  image: string;
  desc: string;
  unitPrice: number;
  quantity: number;
  nDay: number;
  subTotal: number;
};

const datas: tableProps[] = [
  {
    id: 0,
    name: "SMARTPHONE",
    desc: "Google Pixel 6 Pro - 5G Android Phone -Unlocked Smartphone with Advanced Pixel",
    image: PhoneImage,
    nDay: 10,
    unitPrice: 500,
    quantity: 3,
    subTotal: 300,
  },
  {
    id: 0,
    name: "SMARTPHONE II",
    desc: "Google Pixel 6 Pro - 5G Android Phone -Unlocked Smartphone with Advanced Pixel",
    image: AssetI,
    nDay: 10,
    unitPrice: 500,
    quantity: 3,
    subTotal: 300,
  },
];

function ProductTable() {
  const rows = datas.map((d) => (
    <Table.Tr key={d.id}>
      <Table.Td>
        <Group wrap="nowrap" align="flex-start">
          <Image
            w={60}
            fit="contain"
            src={d.image}
            alt={d.name}
            loading="lazy"
          />
          <Box>
            <Text fw={"bold"} tt={"uppercase"} className="active">
              {d.name}
            </Text>
            <Text size="sm" lineClamp={2}>
              {d.desc}
            </Text>
          </Box>
        </Group>
      </Table.Td>
      <Table.Td><Text>XAF {d.unitPrice}</Text></Table.Td>
      <Table.Td>x{d.quantity}</Table.Td>
      <Table.Td>{d.nDay} Days</Table.Td>
      <Table.Td>XAF {d.subTotal}</Table.Td>
    </Table.Tr>
  ));
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
          <Table.Th fw={"normal"}>Products</Table.Th>
          <Table.Th fw={"normal"}>Price</Table.Th>
          <Table.Th fw={"normal"}>Quantity</Table.Th>
          <Table.Th fw={"normal"}>NOMBER OF DAYS</Table.Th>
          <Table.Th fw={"normal"}>Sub-Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default ProductTable;
