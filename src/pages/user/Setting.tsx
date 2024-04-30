import React, { useState } from "react";
import {
  Text,
  Card,
  Group,
  Avatar,
  Stack,
  Button,
  TextInput,
  Combobox,
  Input,
  PasswordInput,
  InputBase,
  useCombobox,
} from "@mantine/core";
import Chevron from "./../../assets/icons/Chevron.svg?react";
import image from "./../../assets/users/customer call.webp";

function Setting() {
  const sexe = ["Feminin", "Masculin"];
  const age = ["10-20", "30-60", "80-plus"];
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const agecombobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [ageValue, setAgeValue] = useState<string | null>(null);

  const sexeOption = sexe.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const ageOptions = age.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  return (
    <>
      <Card withBorder>
        <Card.Section withBorder p={"xs"}>
          <Text tt={"uppercase"}>Account Info</Text>
        </Card.Section>
        <Group mt={"md"} gap={"md"} align="flex-start">
          <Avatar src={image} radius="50%" w={180} h={180} />
          <Stack gap={0} w={"35%"}>
            <TextInput
              label="First Name "
              placeholder="Kevin"
              radius={"md"}
              mt="7"
              size="sm"
              //leftSection={<CmFlag />}
            />
            <TextInput
              type="tel"
              label="Phone Number"
              placeholder="ex: +237 697 00 00 00"
              radius={"md"}
              mt="7"
              size="sm"
              //leftSection={<CmFlag />}
            />
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  mt="7"
                  component="button"
                  type="button"
                  label="Choix sexe"
                  pointer
                  rightSection={<Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {value || (
                    <Input.Placeholder>Choix du sexe</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{sexeOption}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Stack>
          <Stack gap={0} w={"35%"}>
            <TextInput
              label="Last Name "
              placeholder="Kevin"
              radius={"md"}
              mt="7"
              size="sm"
              //leftSection={<CmFlag />}
            />
            <TextInput
              type="mail"
              label="Email"
              placeholder="mail@gmail.com"
              radius={"md"}
              mt="7"
              size="sm"
              //leftSection={<CmFlag />}
            />
            <Combobox
              store={agecombobox}
              onOptionSubmit={(val) => {
                setAgeValue(val);
                agecombobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  mt="7"
                  component="button"
                  type="button"
                  label="Age range"
                  pointer
                  rightSection={<Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => agecombobox.toggleDropdown()}
                >
                  {ageValue || <Input.Placeholder>range age</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{ageOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Stack>
        </Group>
        <Button radius={"xl"} mt={"md"} w={"fit-content"}>
          Save Changes
        </Button>
      </Card>
      <Card withBorder mt={"md"}>
        <Card.Section withBorder p={"xs"}>
          <Text tt={"uppercase"}>Change Password</Text>
        </Card.Section>
        <PasswordInput
          label="Current Password"
          placeholder=""
          //visible={visible}
          //onVisibilityChange={toggle}
          my={3}
        />

        <PasswordInput
          label="New Password"
          placeholder="Nouveau mot de passe"
          //visible={visible}
          //onVisibilityChange={toggle}
          my={3}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="confirmé votre mot de passe"
          //visible={visible}
          //onVisibilityChange={toggle}
          my={3}
        />
        <Button radius={"xl"} mt={"md"} w={"fit-content"}>
          Change Passowrd
        </Button>
      </Card>
    </>
  );
}

export default Setting;
