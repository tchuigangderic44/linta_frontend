import React, { useEffect, useState, useContext } from "react";
import {
  Center,
  Tabs,
  Text,
  TextInput,
  Button,
  Checkbox,
  Group,
  PasswordInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./../styles/signIn.module.css";
import LINK from "../utils/LinkApp";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/context";
type signType = "Sign In" | "Sign Up";
function LoginSignIn() {
  const navigate = useNavigate();
  const d = useContext(Context);
  const [visible, { toggle }] = useDisclosure(false);
  const [signInMethod, setSignInMethod] = useState<signType>("Sign Up");
  useEffect(() => {
    if (location.pathname == LINK.USERACCOUNT.SIGNIN.path) {
      setSignInMethod("Sign In");
    } else {
      setSignInMethod("Sign Up");
    }
  }, [location.pathname]);

  return (
    <Center className="top-element-c">
      <Tabs
        value={signInMethod}
        onChange={(s) => {
          //setSignInMethod(s as signType)
          navigate(
            s === "Sign In"
              ? LINK.USERACCOUNT.SIGNIN.path
              : LINK.USERACCOUNT.LOGIN.path,
            {
              replace: true,
            }
          );
        }}
        className={classes["signIn-wrapper"]}
      >
        <Tabs.List>
          <Tabs.Tab w={"50%"} value="Sign Up">
            <Text py={2}>Sign Up</Text>
          </Tabs.Tab>
          <Tabs.Tab w={"50%"} value="Sign In">
            Sign In
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Sign Up" p={"md"}>
          <TextInput
            label="Phone Number"
            placeholder="+237 687 78 78 65"
            size="sm"
            radius={"md"}
          />
          <Text size="sm" mt={7}>
            Enter your telephone number and an otp code will be sent to you for
            verification
          </Text>
          <Group wrap="nowrap" align="flex-start" gap={5} my={7}>
            <Checkbox variant="outline" />
            <Text size="xs">
              I agree to (a){" "}
              <Text td="underline" component="a" className="active" href="#">
                Terms of Use
              </Text>
              , and (b){" "}
              <Text td="underline" component="a" className="active" href="#">
                Privacy Policy
              </Text>
              . I agree to receive more information from
              shop.vamvamlogistics.com about its products and services.
            </Text>
          </Group>

          <Center mt={7}>
            <Button
              radius={"xl"}
              w={"100%"}
              component={Link}
              to={LINK.USERACCOUNT.OTP.path}
            >
              Continu
            </Button>
          </Center>
        </Tabs.Panel>
        <Tabs.Panel value="Sign In" p={"md"}>
          <TextInput
            label="Phone Number"
            placeholder="+237 687 78 78 65"
            size="sm"
            radius={"md"}
          />
          <PasswordInput
            label={
              <Group justify="space-between">
                <Text>Password</Text>
                <Text
                  span
                  component={Link}
                  to={LINK.USERACCOUNT.FORGETPASSWORD.path}
                  className="active"
                  size="sm"
                >
                  Forget Password ?
                </Text>
              </Group>
            }
            placeholder="saisir votre mot de passe"
            visible={visible}
            onVisibilityChange={toggle}
            my={7}
          />
          <Center mt={7}>
            <Button
              radius={"xl"}
              w={"100%"}
              onClick={() => d?.doSignIn("TEXT", "Text")}
            >
              sign In
            </Button>
          </Center>
        </Tabs.Panel>
      </Tabs>
    </Center>
  );
}

export default LoginSignIn;
