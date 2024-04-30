import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Group,
  Text,
  Rating,
  lighten,
  Center,
  Table,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ShoppingIcon from "./../assets/icons/shopping_basket.svg?react";
import classes from "./../styles/view-product.module.css";
import { cartProductType } from "../utils/cartProductType";
import AddButton from "./AddButton.component";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  updateDuration,
  incrementQuantity,
  dicreaseQuantity,
  incrementDuration,
  dicreaseDuration,
  addToCardWithValue,
} from "../states/product-cart/cartSlice";
import { RootState, AppDispatch } from "../store/store";
type PropsDetailsProduct = {
  data: cartProductType | null;
};

function DetailProduct({ data }: PropsDetailsProduct) {
  const breakpoint = useMediaQuery("(max-width:530px)");
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
  const dataTable = [
    { label: "unitPrice", value: "Negotiable" },
    { label: "Type", value: "Classic shoe" },
    { label: "Classic", value: "Negotiable" },
    { label: "Material", value: "Plastic material" },
    { label: "Design", value: "Modern nice" },
    {
      label: "Customization",
      value: "Customized logo and design custom packages",
    },
    { label: "Protection", value: "Refund Policy" },
    { label: "Warranty", value: "2 years full warranty " },
  ];
  return (
    <Flex direction={"column"} gap={12} className={classes["product-info"]}>
      <Text className={classes["product-name"]} fw={"bold"}>
        {data
          ? data.name
          : "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}
      </Text>
      <Group gap={5}>
        <Rating value={data ? data.star : 4} fractions={2} readOnly />
        <Text c={"orange"}>{data ? data.star : 4}</Text>
        <Box
          w={6}
          h={6}
          style={{ backgroundColor: "#DEE2E7", borderRadius: "50%" }}
        ></Box>
        <ShoppingIcon />
        <Text c={"gray"}>{data ? data.orderNumber : 134} Orders</Text>
      </Group>
      <Box p={breakpoint ? 10 : 20} bg={lighten("#FF9017", 0.7)}>
        <Center>
          <Text fw={"bold"} size={breakpoint ? "md" : "1.3em"} lts={1}>
            XAF {data ? data.unitPrice : 5000}/Jour
          </Text>
        </Center>
      </Box>
      {breakpoint && (
        <>
          <Text size="sm" c={"gray"}>
            {data?.description}
          </Text>
          <Flex direction={"column"} gap={5}>
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
        </>
      )}
      <Table>
        <Table.Tbody>
          {dataTable.map((d, i) => (
            <Table.Tr
              key={d.label}
              styles={{
                tr: {
                  borderWidth: `${i % 3 === 0 ? "1" : "0"}`,
                },
              }}
            >
              <Table.Td c={"#8B96A5"} style={{ whiteSpace: "nowrap" }}>
                {d.label} :{" "}
              </Table.Td>
              <Table.Td c={"#505050"}>{d.value}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Flex>
  );
}
export default DetailProduct;
