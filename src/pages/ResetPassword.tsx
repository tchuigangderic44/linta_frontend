import React from "react";
import { Center, Card, Text, PasswordInput, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
function ResetPassword() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Center className="top-element-c">
      <Card withBorder maw={330} miw={280}>
        <Text fw={"bold"} ta={"center"}>
          Reset Password
        </Text>
        <Text c={"gray"} my={3} ta={"center"}>
          Enter new password
        </Text>
        <PasswordInput
          label="Password"
          placeholder="saisir votre mot de passe"
          visible={visible}
          onVisibilityChange={toggle}
          my={3}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="confirmé votre mot de passe"
          visible={visible}
          onVisibilityChange={toggle}
          my={3}
        />
        <Button radius={"xl"} mt={5}>
          Reset Password
        </Button>
      </Card>
    </Center>
  );
}

export default ResetPassword;
