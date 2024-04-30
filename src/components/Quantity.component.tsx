import React, { useState, useEffect } from "react";
import { Flex, Group, Text, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Cmflag from "./../assets/icons/flagcm.svg?react";
import VerifiedIcon from "./../assets/icons/verified_user.svg?react";
import AddButton from "./AddButton.component";
import classes from "./../styles/view-product.module.css";

import { cartProductType } from "../utils/cartProductType";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCardWithValue,
  dicreaseDuration,
  dicreaseQuantity,
  incrementDuration,
  incrementQuantity,
  updateDuration,
  updateQuantity,
} from "../states/product-cart/cartSlice";

type productProps = {
  data: cartProductType | null;
};

function QuantityProduct({ data }: productProps) {
  const breakpoint = useMediaQuery("(max-width:800px)");
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const dispach = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(0);
  const [foundItemInCart, setFoundItemInCart] = useState<
    cartProductType | undefined
  >(undefined);
  useEffect(() => {
    const item = cart.find((c) => c.id === data?.id);
    if (item) {
      setQuantity(item.quantity || 1);
      setDuration(item.duration || 0);
      setFoundItemInCart(item);
    }
  }, [cart]);
  useEffect(() => {
    /*dispach(
      updateCart({ data: { qty: quantity, duration: duration }, id: data!.id })
    );*/
  }, [duration, quantity]);
  function updateValueQuantity(v: number) {
    dispach(updateQuantity({ value: v, id: data!.id }));
  }
  function updateValueDuration(v: number) {
    dispach(updateDuration({ value: v, id: data!.id }));
  }
  return (
    <Flex
      className={classes["wrapper-ctn"] + " " + classes["product-quantity"]}
      direction={"column"}
      gap={5}
    >
      <Group wrap="nowrap">
        <Cmflag />
        <Text c={"#8B96A5"} size={breakpoint ? "sm" : undefined}>
          Cameroon, Douala
        </Text>
      </Group>
      <Group wrap="nowrap">
        <VerifiedIcon />
        <Text c={"#8B96A5"} size={breakpoint ? "sm" : undefined}>
          Cameroon shipping
        </Text>
      </Group>
      <Text>Quantity</Text>
      <AddButton
        number={quantity}
        min={1}
        setValue={setQuantity}
        handleChange={updateValueQuantity}
        handleIncrement={() => dispach(incrementQuantity(data!.id))}
        handleDecrement={() => dispach(dicreaseQuantity(data!.id))}
      />
      <Text>Number of Days</Text>
      <AddButton
        min={0}
        number={duration}
        setValue={setDuration}
        handleChange={updateValueDuration}
        handleIncrement={() => dispach(incrementDuration(data!.id))}
        handleDecrement={() => dispach(dicreaseDuration(data!.id))}
      />
      <Button
        w={"100%"}
        display={"block"}
        radius={"lg"}
        mt="7"
        fz={"lg"}
        disabled={foundItemInCart != undefined}
        onClick={() =>
          dispach(
            addToCardWithValue({
              prod: data!,
              data: { qty: quantity, duration: duration },
            })
          )
        }
      >
        {foundItemInCart ? "Deja au Panier" : "Ajout au Panier"}
      </Button>
    </Flex>
  );
}
export default QuantityProduct;
