import { Card, Center, Text, TextInput, Group, Button } from "@mantine/core";
import React from "react";
function OTP() {
  return (
    <Center className="top-element-c">
      <Card withBorder>
        <Text fw={"bold"} ta={"center"}>
          OTP Verification
        </Text>
        <Text size="sm" c={"gray"} ta={"center"} my={3}>
          An otp code has been sent to the number ......35
        </Text>
        <TextInput
          label={
            <Group justify="space-between" my={3}>
              <Text>Verification Code</Text>
              <a href={"#"} className="active">
                Resend Code
              </a>
            </Group>
          }
          placeholder="saisir le code"
          my={7}
        />
        <Center mt={7}>
          <Button radius={"xl"} w={"100%"}>
            Verify me
          </Button>
        </Center>
      </Card>
    </Center>
  );
}

export default OTP;
