import React, { useState } from "react";
import { Group, Menu, UnstyledButton } from "@mantine/core";
import Chevron from "./../assets/icons/Chevron.svg?react";
import classes from "./../styles/navbar.module.css";
import EnFlag from "./../assets/icons/Flag_USA.svg?react";
import FrFlag from "./../assets/icons/flagfr.svg?react";
//type Props = {}

const data = [
  { label: "English", image: <EnFlag width={24} height={17} /> },
  { label: "French", image: <FrFlag width={24} height={17} /> },
];

const LangComboBox = (/*props: Props*/) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={item.image}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));
  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      //width="target"
      width={160}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            {selected.image}
            <span className={classes.label}>{selected.label}</span>
            <Chevron className={classes.chevronClass} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LangComboBox;
