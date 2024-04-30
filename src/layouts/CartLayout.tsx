import {
  Group,
  Card,
  Stack,
  Divider,
  Text,
  Button,
  Box,
  Center,
  Title,
} from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import TruckIcon from "./../assets/icons/truck-icon.svg?react";
import SecureIcon from "./../assets/icons/lock-icon.svg?react";
import MessageIcon from "./../assets/icons/message-icon.svg?react";
import CheckIcon from "./../assets/icons/CheckCircle.svg?react";
import HomeIcon from "./../assets/icons/home-icon.svg?react";
import DashIcon from "./../assets/icons/Stack.svg?react";
import React, { useEffect, useState } from "react";
import classes from "./../styles/product-cart.module.css";
import { Link } from "react-router-dom";
import LINK from "../utils/LinkApp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { clearCart } from "../states/product-cart/cartSlice";
type cardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function CardElement({ Icon, title, description }: cardProps) {
  return (
    <Group>
      <Box className={classes.icon}>
        <Icon />
      </Box>
      <Stack gap={0}>
        <Text size="sm">{title}</Text>
        <Text c={"gray"} size="sm">
          {description}
        </Text>
      </Stack>
    </Group>
  );
}
function CartLayout() {
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState<boolean>(false);
  //const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    if (cart.length > 0) {
      const totalAmount = cart.reduce((acc, data) => {
        return acc + data.quantity! * data.unitPrice;
      }, 0);
      setTotal(totalAmount);
    }
    if (cart.length === 0) {
      setTotal(0);
    }
  }, [cart]);
  function handleCheckout() {
    setCheckout(true);
    setTimeout(() => {
      dispatch(clearCart());
    }, 1000);
  }
  useEffect(() => {
    setCheckout(false);
  }, [location.pathname]);
  return (
    <div className="w-full container-with-padding">
      {!checkout ? (
        <>
          <Group className={classes["product-cart-wrapper"] + " top-element"}>
            <Card withBorder className={classes["product-cart-list"]}>
              <Outlet />
            </Card>
            <Card withBorder className={classes["product-cart-checkout"]}>
              <Group w={"100%"} justify="space-between" gap={0}>
                <Text c={"dark"}>Subtotal:</Text>
                <Text> XAF {total}</Text>
              </Group>
              <Group justify="space-between" gap={0}>
                <Text c={"dark"}>Discount:</Text>
                <Text c={"red"}>XAF 0.00</Text>
              </Group>
              <Group justify="space-between" gap={0}>
                <Text c={"dark"}>Tax:</Text>
                <Text c={"green"}>+ XAF 0.00</Text>
              </Group>
              <Group py={5} justify="space-between" gap={0}>
                <Text fw={"bold"}>Total :</Text>
                <Text>XAF {total}</Text>
              </Group>
              <Divider pt={5} />
              <Text py={5}> </Text>
              <Button
                radius={"xl"}
                component={Link}
                to={LINK.CART.CHECKOUT.path}
                disabled={cart.length < 1}
                className={classes["checkout-btn"]}
                onClick={(e) => {
                  cart.length < 1
                    ? e.preventDefault()
                    : location.pathname === LINK.CART.CHECKOUT.path
                    ? handleCheckout()
                    : "";
                }}
              >
                {location.pathname === LINK.CART.path
                  ? `Checkout (${cart.length} Items)`
                  : `Place Order`}
              </Button>
            </Card>
          </Group>
          <Group gap={"lg"} mt={"lg"}>
            <CardElement
              Icon={() => <SecureIcon />}
              title="Secure payment"
              description="Have you ever finally just "
            />
            <CardElement
              Icon={() => <MessageIcon />}
              title="Customer support"
              description="Have you ever finally just "
            />
            <CardElement
              Icon={() => <TruckIcon />}
              title="swift and reliable delivery"
              description="Have you ever finally just "
            />
          </Group>
        </>
      ) : (
        <Center>
          <Stack gap={"sm"} mt={50}>
            <Center>
              <CheckIcon />
            </Center>
            <Title order={2} ta={"center"}>
              Your order is successfully place
            </Title>
            <Text ta={"center"} c={"gray"}>
              Your order has been taken into account, vamvam sales
              representatives will contact you via the chat area to complete the
              order.
            </Text>
            <Group justify="center" align="center">
              <Button
                radius={"xl"}
                variant="outline"
                leftSection={<DashIcon />}
                component={Link}
                to={LINK.USERACCOUNT.path}
                className={classes["dashboard-link"]}
              >
                Go to Dashboard
              </Button>
              <Button
                radius={"xl"}
                leftSection={<HomeIcon className={classes["home-link"]} />}
                component={Link}
                to={"/"}
              >
                Go To home
              </Button>
            </Group>
          </Stack>
        </Center>
      )}
    </div>
  );
}

export default CartLayout;
