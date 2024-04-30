import React from "react";
import { Flex, Card, Text, ActionIcon, Group, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Pagination } from "@mantine/core";
import { cartProductType } from "../utils/cartProductType";
import { useToggle } from "@mantine/hooks";
import GridIcon from "../assets/icons/gridIcon.svg?react";
import ListIcon from "../assets/icons/listview.svg?react";
import ProductCard from "./ProductCard.component";
import classes from "./../styles/product-card.module.css";
type Props = {
  products: cartProductType[];
};

export type toogleViewType = "grid" | "list";
export default function ShopList({ products }: Props) {
  const breakpoint = useMediaQuery("(max-width:450px");
  const [view, toggle] = useToggle<toogleViewType>(["grid", "list"]);
  function handleSwitch(s: toogleViewType) {
    if (s !== view) {
      toggle();
    }
  }

  return (
    <Stack className={classes["product-list-wrapper"]}>
      <Card withBorder h={68} w={"100%"} className={classes["card-band"]}>
        <Group justify="space-between">
          <Text>
            {products.length} items in <b>Mobile accessory</b>
          </Text>
          <ActionIcon.Group>
            <ActionIcon
              variant={view === "grid" ? "light" : "default"}
              size="lg"
              aria-label="grid"
              onClick={() => handleSwitch("grid")}
            >
              <GridIcon />
            </ActionIcon>

            <ActionIcon
              variant={view === "list" ? "light" : "default"}
              size="lg"
              aria-label="list"
              onClick={() => handleSwitch("list")}
            >
              <ListIcon />
            </ActionIcon>
          </ActionIcon.Group>
        </Group>
      </Card>
      <Flex
        justify={"space-between"}
        gap={view === "grid" ? (breakpoint ? 1 : 10) : 9}
        className="top-element"
        wrap={"wrap"}
      >
        {products.map((d, i) => {
          return <ProductCard key={i} product={d} view={view} />;
        })}
      </Flex>
      <Group w={"100%"} justify="flex-end">
        <Pagination total={5} size={"md"} />
      </Group>
    </Stack>
  );
}
