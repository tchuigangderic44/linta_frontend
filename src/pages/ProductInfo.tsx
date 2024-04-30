import React from "react";
import { Box, Flex, Group, Text, Tabs } from "@mantine/core";
import { useLocation } from "react-router-dom";

import { useMediaQuery } from "@mantine/hooks";

import classes from "./../styles/view-product.module.css";

//===
import PreviewImage from "./../components/PreviewProduct.component";
import DetailProduct from "./../components/DetailProduct.component";
import QuantityProduct from "../components/Quantity.component";
//===

import { cartProductType } from "../utils/cartProductType";
//type Props = {}

function ProductInfo() {
  const location = useLocation();
  const { data }: { data: cartProductType | null } = location.state ?? {
    data: null,
  };
  const breakpoint = useMediaQuery("(max-width:800px)");
  const breakpointII = useMediaQuery("(max-width:530px)");
  return (
    <Flex
      direction={"column"}
      gap={20}
      className={classes.viewProductContainer}
    >
      <div className={classes.wrapper + " container-with-padding "}>
        {" "}
        <Group
          className={classes["wrap-info-product"]}
          align="flex-start"
          gap={breakpoint ? 5 : undefined}
          justify="space-between"
        >
          <PreviewImage data={data} />
          <DetailProduct data={data} />
          <QuantityProduct data={data} />
        </Group>
      </div>

      <div className="container-with-padding ">
        {!breakpointII && (
          <Box w={"100%"} className={classes["wrapper-ctn"]}>
            <Tabs defaultValue="description">
              <Tabs.List>
                <Tabs.Tab value="description">Description</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="description" pt="xs">
                {data ? (
                  <Text>{data.description}</Text>
                ) : (
                  <Text>
                    {" "}
                    t nesciunt eaque sed ut. Natus suscipit consequuntur ea
                    nisi.
                  </Text>
                )}
              </Tabs.Panel>
            </Tabs>
          </Box>
        )}
      </div>
    </Flex>
  );
}

export default ProductInfo;
