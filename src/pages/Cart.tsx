import {
  Group,
  Stack,
  Divider,
  Button,
  Center,
  Image,
  Title,
} from "@mantine/core";
import ProductCart from "../components/ProductCart.component";
import ArrowLeft from "./../assets/icons/ArrowLeft.svg?react";
import EmptyBox from "./../assets/images/empty-box.png";
import React from "react";
import { Link } from "react-router-dom";
import LINK from "../utils/LinkApp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { clearCart } from "../states/product-cart/cartSlice";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Stack>
        {cart.length === 0 && (
          <>
            <Button
              leftSection={<ArrowLeft />}
              radius={"xl"}
              component={Link}
              to={LINK.SHOP.path}
              w={"fit-content"}
            >
              Back to shop
            </Button>
            <Center mb={"xl"} pb={"xl"}>
              <Stack gap={"sm"}>
                <Center>
                  <Image src={EmptyBox} w={"20%"} fit="contain" />
                </Center>
                <Title ta={"center"} c={"gray"} order={3}>
                  pannier est vide !!!
                </Title>
              </Stack>
            </Center>
          </>
        )}
        {cart.map((d, i) => (
          <Stack key={i}>
            <ProductCart {...d} />
            <Divider />
          </Stack>
        ))}
      </Stack>
      {cart.length > 0 && (
        <Group justify="space-between" mt={"lg"}>
          <Button
            leftSection={<ArrowLeft />}
            radius={"xl"}
            component={Link}
            to={LINK.SHOP.path}
          >
            Back to shop
          </Button>
          {cart.length > 1 && (
            <Button
              radius={"xl"}
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                dispatch(clearCart());
              }}
            >
              Remove all
            </Button>
          )}
        </Group>
      )}
    </>
  );
}

export default Cart;
