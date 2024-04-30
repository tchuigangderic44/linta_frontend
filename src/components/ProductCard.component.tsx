import React from "react";
import { Card, Image, Text, Group, Box, Flex } from "@mantine/core";
import { cartProductType } from "../utils/cartProductType";
import { useMediaQuery } from "@mantine/hooks";
import { Rating } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import classes from "./../styles/product-card.module.css";
///import classes from "./../styles/product-card.module.css";
import { toogleViewType } from "./ShopList.component";
import LINK from "../utils/LinkApp";
type Props = {
  product: cartProductType;
  view: toogleViewType;
};

function ProductCard({ product, view }: Props) {
  const breakpoint = useMediaQuery("(max-width:830px)");
  const breakpointII = useMediaQuery("(max-width:615px)");
  const breakpointIII = useMediaQuery("(max-width:450px)");

  const navigate = useNavigate();
  function handleClick(link: string, data: cartProductType) {
    navigate(link, {
      state: { data },
    });
  }
  return (
    <>
      {view == "grid" ? (
        <Card
          className={classes["product-view-grid"]}
          withBorder
          component={Link}
          to={`${LINK.SHOP.DETAILS.path}\\${product.name}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(`${LINK.SHOP.DETAILS.path}\\${product.name}`, product);
          }}
        >
          <Card.Section withBorder>
            <Image
              loading="lazy"
              src={product.images[0]}
              alt={product.name}
              p={13}
              radius={20}
              fit="contain"
              className={classes["img-grid-view"]}
            />
          </Card.Section>
          <Flex
            direction={breakpointIII ? "column-reverse" : "column"}
            gap={5}
            pt={breakpointII ? 7 : 0}
          >
            <Text
              size={breakpointIII ? "sm" : "md"}
              fw={"bold"}
              mt={breakpointII ? 0 : 17}
            >
              XAF {product.unitPrice}/JOUR
            </Text>
            <Group gap={breakpoint ? 5 : 10} className={classes["ctn-rating"]}>
              <Rating value={product.star} fractions={2} readOnly size={"xs"} />
              <Text c={"orange"}>{product.star}</Text>
              <Box
                w={6}
                h={6}
                style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
              ></Box>
              <Text c={"green"} style={{ whiteSpace: "nowrap" }}>
                {product.shop}
              </Text>
            </Group>
            <Text c={"gray"} size={breakpointIII ? "sm" : undefined}>
              {product.name}
            </Text>
          </Flex>
        </Card>
      ) : (
        <Card withBorder className={classes["product-view-list"]} w={"100%"}>
          <Group justify="flex-start" align="flex-start" wrap="nowrap">
            <Image
              loading="lazy"
              src={product.images[0]}
              className={classes["img-list-view"]}
              height={"auto"}
              alt={product.name}
              fit="contain"
              //miw={breakpoint ? undefined : 210}
            />
            <Flex
              direction={"column"}
              gap={breakpoint ? 5 : 10}
              className="p-link"
            >
              <Text mt={5} size={breakpointIII ? "sm" : undefined}>
                {product.name}
              </Text>
              <Text size={breakpointIII ? "sm" : "md"} fw={"bold"}>
                XAF {product.unitPrice}/JOUR
              </Text>
              <Group wrap="nowrap" className={classes["ctn-rating-list"]}>
                <Rating value={product.star} fractions={2} readOnly />
                <Text c={"orange"}>{product.star}</Text>
                <Box
                  w={6}
                  h={6}
                  style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
                ></Box>
                <Text c={"dark"}>{product.orderNumber} Orders</Text>
                <Box
                  w={6}
                  h={6}
                  style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
                ></Box>
                <Text c={"green"}>{product.shop}</Text>
              </Group>
              <Text
                c={"gray"}
                lineClamp={breakpoint ? 1 : 2}
                className={classes["t-card"]}
              >
                {product.description}
              </Text>
              <Link
                style={{ fontSize: 16, fontWeight: 500 }}
                className="Link active"
                to={`${LINK.SHOP.DETAILS.path}\\${product.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(
                    `${LINK.SHOP.DETAILS.path}\\${product.name}`,
                    product
                  );
                }}
              >
                View details
              </Link>
            </Flex>
          </Group>
        </Card>
      )}
    </>
  );
}

export default ProductCard;
