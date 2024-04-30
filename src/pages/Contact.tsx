import React from "react";
import { Group, Stack, Title, Text, Center, Box, Button } from "@mantine/core";
import AssitantProfile from "./../assets/users/assistant.jpg";
import classes from "./../styles/contact.module.css";
import TruckIcon from "./../assets/icons/Truck.svg?react";
import SecureIcon from "./../assets/icons/LockOpenlock.svg?react";
import CardIcon from "./../assets/icons/CreditCardpayement.svg?react";
import UserIcon from "./../assets/icons/user-icon.svg?react";
import ChatIcon from "./../assets/icons/chat-icon.svg?react";
import CallIcon from "./../assets/icons/call-icon.svg?react";
import RightIcon from "./../assets/icons/right-icon.svg?react";
import { Link } from "react-router-dom";
type cardProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
};

function CardElement({ Icon, title, href }: cardProps) {
  return (
    <Box className={classes["card-element"]} component={Link} to={href}>
      <Group justify="center">
        <Icon />
        <Text className={classes.title}>{title}</Text>
      </Group>
    </Box>
  );
}

type CardBoxProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Contact: React.JSXElementConstructor<any>;
};
function CardBoxElement({ Icon, title, description, Contact }: CardBoxProps) {
  return (
    <Box className={classes["card-box-element"]}>
      <Group wrap="nowrap" align="flex-start">
        <Icon />
        <Stack gap={5}>
          <Title order={6}>{title}</Title>
          <Text size="sm" c={"gray"}>
            {description}
          </Text>
          <Contact />
        </Stack>
      </Group>
    </Box>
  );
}
function Contact() {
  return (
    <div className="w-full container-with-padding ">
      <Group justify="space-between">
        <Stack className={classes["t-wrapper"]}>
          <Title order={2} c={"var(--primary-color)"}>
            HELP CENTER
          </Title>
          <Text size="xl">We are available to answer your questions</Text>
        </Stack>
        <img
          src={AssitantProfile}
          alt="assistant"
          className={classes.assistant}
        />
      </Group>
      <Center>
        <Stack align="center">
          <Title order={3}>What can we assist you with today ?</Title>
          <Group justify="center">
            <CardElement
              Icon={() => <TruckIcon width={40} />}
              title="Track Order"
              href="/"
            />
            <CardElement
              Icon={() => <SecureIcon width={40} />}
              title="Reset Password"
              href="#"
            />
            <CardElement
              Icon={() => <CardIcon width={40} />}
              title="Payment Option"
              href="#"
            />
            <CardElement
              Icon={() => <UserIcon width={40} />}
              title="User & Account"
              href="#"
            />
          </Group>
          <Title order={3}>Popular Topics</Title>
          <Group className={classes["t-question"]}>
            <Stack>
              <ul className={classes.list}>
                <li>
                  <a href="#">How do I return my item?</a>
                </li>
                <li>
                  <a href="#">What is Vamvam Returns Policy</a>
                </li>
                <li>
                  <a href="#">How long is the refund process?</a>
                </li>
              </ul>
            </Stack>
            <Stack>
              <ul className={classes.list}>
                <li>
                  <a href="#">How do I return my item?</a>
                </li>
                <li>
                  <a href="#">What is Vamvam Returns Policy</a>
                </li>
                <li>
                  <a href="#">How long is the refund process?</a>
                </li>
              </ul>
            </Stack>
            <Stack>
              <ul className={classes.list}>
                <li>
                  <a href="#">How do I return my item?</a>
                </li>
                <li>
                  <a href="#">What is Vamvam Returns Policy</a>
                </li>
                <li>
                  <a href="#">How long is the refund process?</a>
                </li>
              </ul>
            </Stack>
          </Group>
          <Text size="xl">Don’t find your answer ? </Text>
          <Title order={3}>Contact with us</Title>
          <Group justify="center">
            <CardBoxElement
              Icon={() => <CallIcon className={classes["img-cover"]} />}
              title="Call us now"
              description="we are available online from 9:00 AM to 5:00 PM
(GMT95:45) Talk with use now"
              Contact={() => (
                <>
                  <a href="tel:+237 674 71 05 05" className={classes.contact}>
                    +237 674 71 05 05
                  </a>
                  <Button
                    rightSection={<RightIcon className={classes.icon} />}
                    w={"fit-content"}
                    component="a"
                    href="tel:+237 674 71 05 05"
                  >
                    Call now
                  </Button>
                </>
              )}
            />
            <CardBoxElement
              Icon={() => <ChatIcon className={classes["img-cover"]} />}
              title="Chat With us"
              description="we are available online from 9:00 AM to 5:00 PM
(GMT95:45) Talk with use now"
              Contact={() => (
                <>
                  <a
                    href="mailto:Support@vamvamlogistics.com"
                    className={classes.contact}
                  >
                    Support@vamvamlogistics.com
                  </a>
                  <Button
                    bg={"green"}
                    rightSection={<RightIcon className={classes.icon} />}
                    w={"fit-content"}
                    component="a"
                    href="mailto:Support@vamvamlogistics.com"
                  >
                    Contact Us
                  </Button>
                </>
              )}
            />
          </Group>
        </Stack>
      </Center>
    </div>
  );
}

export default Contact;
