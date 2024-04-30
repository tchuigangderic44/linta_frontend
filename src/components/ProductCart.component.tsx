import React, { useEffect, useState } from "react";
import { Group, Image, Stack, Text, Button, Box } from "@mantine/core";
import AddButton from "./AddButton.component";
import classes from "./../styles/product-cart.module.css";

import { cartProductType } from "../utils/cartProductType";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  updateDuration,
  incrementDuration,
  dicreaseDuration,
  incrementQuantity,
  dicreaseQuantity,
  removeCartItem,
} from "../states/product-cart/cartSlice";
import { RootState, AppDispatch } from "../store/store";
function ProductCart({ ...product }: cartProductType) {
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const dispach = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const item = cart.find((c) => c.id === product?.id);
    if (item) {
      setQuantity(item.quantity || 1);
      setDuration(item.duration || 0);
    }
  }, [cart]);
  useEffect(() => {
    /*dispach(
      updateCart({ data: { qty: quantity, duration: duration }, id: data!.id })
    );*/
  }, [duration, quantity]);
  function updateValueQuantity(v: number) {
    dispach(updateQuantity({ value: v, id: product!.id }));
  }
  function updateValueDuration(v: number) {
    dispach(updateDuration({ value: v, id: product!.id }));
  }
  return (
    <Group
      align="flex-start"
      justify="space-between"
      className={classes["product-cart-ctn"]}
    >
      <Image
        fit="contain"
        src={product.images[0]}
        className={classes["product-cart-img"]}
      />
      <Stack
        justify="space-between"
        gap={5}
        className={classes["product-cart-info"]}
      >
        <Text size="sm" fw={"bold"} lineClamp={2}>
          {product.name}
        </Text>
        <Text size="sm" c={"gray"} lineClamp={1}>
          {product.description}
        </Text>
        <Group wrap="nowrap" gap={3} justify="space-between">
          <Box className={classes["product-cart-detail-mobile"]}>
            <Text c={"dark"} size="sm">
              Number of Days
            </Text>
            <AddButton
              min={0}
              number={duration}
              setValue={setDuration}
              handleChange={updateValueDuration}
              handleIncrement={() => dispach(incrementDuration(product!.id))}
              handleDecrement={() => dispach(dicreaseDuration(product!.id))}
            />
          </Box>
          <Box className={classes["product-cart-detail-mobile"]} mr={10}>
            <Text size="sm" c={"dark"}>
              Quantity
            </Text>
            <AddButton
              number={quantity}
              min={1}
              setValue={setQuantity}
              handleChange={updateValueQuantity}
              handleIncrement={() => dispach(incrementQuantity(product!.id))}
              handleDecrement={() => dispach(dicreaseQuantity(product!.id))}
            />
          </Box>
        </Group>
        <Group justify="space-between">
          <Box className={classes["product-cart-detail-mobile"]}>
            <Text c={"dark"} size="sm">
              Price
            </Text>
            <Text>XAF {product.unitPrice}</Text>
          </Box>
          <Button
            c={"red"}
            variant="default"
            w={"fit-content"}
            mr={10}
            onClick={(e) => {
              e.preventDefault();
              dispach(removeCartItem(product.id));
            }}
          >
            remove
          </Button>
        </Group>
      </Stack>

      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Number of Days</Text>
        <AddButton
          min={0}
          number={duration}
          setValue={setDuration}
          handleChange={updateValueDuration}
          handleIncrement={() => dispach(incrementDuration(product!.id))}
          handleDecrement={() => dispach(dicreaseDuration(product!.id))}
        />
      </Box>
      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Quantity</Text>
        <AddButton
          number={quantity}
          min={1}
          setValue={setQuantity}
          handleChange={updateValueQuantity}
          handleIncrement={() => dispach(incrementQuantity(product!.id))}
          handleDecrement={() => dispach(dicreaseQuantity(product!.id))}
        />
      </Box>
      <Box className={classes["product-cart-detail"]}>
        <Text c={"dark"}>Price</Text>
        <Text>XAF {product.unitPrice}</Text>
      </Box>
    </Group>
  );
}

export default ProductCart;
