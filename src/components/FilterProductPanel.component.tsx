import React, { useState } from "react";
import {
  Flex,
  Accordion,
  Anchor,
  Text,
  RangeSlider,
  Group,
  NumberInput,
  Combobox,
  Button,
  Input,
  Stack,
  useCombobox,
  InputBase,
} from "@mantine/core";
import classes from "./../styles/product-card.module.css";
import { Link } from "react-router-dom";
import "./../styles/shopLayout.css";
//import { cartProductType } from "../utils/cartProductType";
import Chevron from "./../assets/icons/Chevron.svg?react";

const categories: string[] = ["Chair", "Table", "Tent", "Modern Chair"];
export function CategorieFilter() {
  return (
    <Accordion.Item
      value="Categories"
      style={{ borderTop: "1px solid rgba(222, 226, 231, 1)" }}
      pl={0}
    >
      <Accordion.Control pl={0}>
        <Text>Categorie</Text>
      </Accordion.Control>
      <Accordion.Panel className="p-link">
        <Flex direction={"column"} gap={10}>
          {categories.map((s, i) => (
            <Anchor
              component={Link}
              to={"#"}
              key={i}
              p={0}
              className={"catLink"}
            >
              {s}
            </Anchor>
          ))}
          <Anchor component={Link} to={"#"} p={0} className="active">
            See All
          </Anchor>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterPrice() {
  return (
    <Accordion.Item value="FilterPrice">
      <Accordion.Control pl={0}>
        <Text>Price Range</Text>
      </Accordion.Control>
      <Accordion.Panel className="p-link">
        <Flex direction={"column"} gap={10}>
          <RangeSlider
            styles={{
              thumb: { borderWidth: 1 },
            }}
            thumbSize={20}
            minRange={0.2}
            min={0}
            max={10000}
            step={100}
            defaultValue={[0, 1000]}
          />
          <Group gap={6}>
            <NumberInput w={"48%"} label="Min" placeholder="0" hideControls />
            <NumberInput
              w={"48%"}
              label="Max"
              placeholder="10000"
              hideControls
            />
          </Group>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterDistance() {
  return (
    <Accordion.Item value="FilterDistance">
      <Accordion.Control pl={0}>
        <Text>Distance Range</Text>
      </Accordion.Control>
      <Accordion.Panel className="p-link">
        <Flex direction={"column"} gap={10}>
          <Group gap={6}>
            <NumberInput w={"48%"} label="Min" placeholder="1" hideControls />
            <NumberInput w={"48%"} label="Max" placeholder="200" hideControls />
          </Group>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FilterTown() {
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
    <Accordion.Item value="FilterTown">
      <Accordion.Control pl={0}>
        <Text>Ville</Text>
      </Accordion.Control>
      <Accordion.Panel className="p-link">
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
              {value || (
                <Input.Placeholder>Choix d'une ville</Input.Placeholder>
              )}
            </InputBase>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>{options}</Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

/* type Props = {
  
}; */
function FilterProductPanel() {
  const [openedAccordion, setOpenendAccordion] = useState<string[]>([]);
  return (
    <Flex
      className={classes["product-cat-filter"]}
      direction={"column"}
      justify={"flex-start"}
      w={"25%"}
      pos={"sticky"}
      top={"calc(var(--header-height) + 55px)"}
    >
      <Stack>
        <Accordion
          multiple
          value={openedAccordion}
          onChange={setOpenendAccordion}
        >
          <CategorieFilter />
          <FilterPrice />
          <FilterDistance />
          <FilterTown />
        </Accordion>
        <Button
          //fw={"normal"}
          variant="light"
          //className="b-button"
          //fz={"md"}
          mt={10}
        >
          Apply
        </Button>
      </Stack>
    </Flex>
  );
}

export default FilterProductPanel;
