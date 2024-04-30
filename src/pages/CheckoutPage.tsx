import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Group,
  Button,
  TextInput,
  Text,
  Combobox,
  InputBase,
  useCombobox,
  Input,
} from "@mantine/core";
import ArrowLeft from "./../assets/icons/ArrowLeft.svg?react";
import CmFlag from "./../assets/icons/flagcm.svg?react";
import Chevron from "./../assets/icons/Chevron.svg?react";

import LINK from "../utils/LinkApp";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
function CheckoutPage() {
  const cart = useSelector((state: RootState) => state.cart.cartList);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length < 1) {
      navigate(LINK.SHOP.path, { replace: true });
    }
  }, [cart]);
  const towns = ["Yaounde", "Douala", "Garoua"];
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = towns.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  return (
    <>
      <Text fw={"bold"}>Delivery point information</Text>
      <TextInput
        label="Recipient Name"
        placeholder="Tchomba Henri"
        size="sm"
        radius={"md"}
      />
      <Text size="sm" mt={7}>
        Delivery Destination
      </Text>
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
          >
            {value || <Input.Placeholder>Choix d'une ville</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      <TextInput
        type="tel"
        label="Recipient Phone Number "
        placeholder="ex: +237 697 00 00 00"
        radius={"md"}
        mt="7"
        size="sm"
        leftSection={<CmFlag />}
      />
      <TextInput
        type="tel"
        label="Other Contact number (optional)"
        placeholder="ex: +237 697 00 00 00"
        radius={"md"}
        mt="7"
        size="sm"
        leftSection={<CmFlag />}
      />
      <TextInput
        type="tel"
        label="Other Contact number (optional)"
        placeholder="ex: +237 697 00 00 00"
        radius={"md"}
        mt="7"
        size="sm"
        leftSection={<CmFlag />}
      />
      <Group justify="space-between" mt={"lg"}>
        <Button
          leftSection={<ArrowLeft />}
          radius={"xl"}
          component={Link}
          to={LINK.CART.path}
        >
          Back to Cart
        </Button>
      </Group>
    </>
  );
}

export default CheckoutPage;
