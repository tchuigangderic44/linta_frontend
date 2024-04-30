import React from "react";
import {
  Center,
  Card,
  Text,
  TextInput,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import { Link } from "react-router-dom";
import LINK from "../utils/LinkApp";

function ForgetPassword() {
  return (
    <Center className="top-element-c">
      <Card withBorder maw={330}>
        <Text fw={"bold"} ta={"center"}>
          Forget Password
        </Text>
        <Text size="sm" c={"gray"} my={3}>
          Enter the mobile phone number associated with your Vamvam account.
        </Text>
        <TextInput
          label="Phone Number"
          type="tel"
          placeholder="saisir votre numero"
          my={7}
        />
        <Center mt={7}>
          <Button radius={"xl"} w={"100%"}>
            SEND CODE
          </Button>
        </Center>
        <Group justify="space-between" mt={"md"}>
          <Text c={"gray"}>Already have account?</Text>
          <Text
            span
            component={Link}
            className="active"
            to={LINK.USERACCOUNT.SIGNIN.path}
          >
            Sign In
          </Text>
        </Group>
        <Group justify="space-between" mb={"md"}>
          <Text c={"gray"}>Don’t have account? </Text>
          <Text
            span
            component={Link}
            className="active"
            to={LINK.USERACCOUNT.LOGIN.path}
          >
            Sign Up
          </Text>
        </Group>
        <Divider />
        <Text size="sm" mt={"xs"}>
          You may contact{" "}
          <Text span component={Link} className="active" to={LINK.CONTACT.path}>
            Customer Service
          </Text>{" "}
          for help restoring access to your account.
        </Text>
      </Card>
    </Center>
  );
}

export default ForgetPassword;
