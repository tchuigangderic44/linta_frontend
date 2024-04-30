import React, { useState } from "react";
import {
  Group,
  Stack,
  Title,
  Accordion,
  Text,
  Button,
  Center,
} from "@mantine/core";
import classes from "./../styles/faq.module.css";
function FAQ() {
  const [openedAccordion, setOpenendAccordion] = useState<string[]>(["Answer"]);
  return (
    <div className="w-full container-with-padding ">
      <Group className={classes["faq-wrapper"]} align="flex-start">
        <Stack className={classes["faq-ctn"]}>
          <Title>Frequently Asked Questions </Title>
          <Accordion
            multiple
            value={openedAccordion}
            onChange={setOpenendAccordion}
          >
            <Accordion.Item value="Answer">
              <Accordion.Control bg={"var(--primary-color)"} px={"md"}>
                <Text c={"white"}>Fusce molestie condimentum facilisis</Text>
              </Accordion.Control>
              <Accordion.Panel px={"md"}>
                <Text size="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia minus quod accusantium officia ut. Beatae libero
                  perferendis nisi. Cumque, molestiae totam. Mollitia, aut
                  harum! Culpa ab natus tempore tempora earum.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="Answer#2" my={"md"}>
              <Accordion.Control bg={"var(--primary-color)"} px={"md"}>
                <Text c={"white"}>Fusce molestie condimentum facilisis</Text>
              </Accordion.Control>
              <Accordion.Panel px={"md"}>
                <Text size="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia minus quod accusantium officia ut. Beatae libero
                  perferendis nisi. Cumque, molestiae totam. Mollitia, aut
                  harum! Culpa ab natus tempore tempora earum.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="Answer#3">
              <Accordion.Control bg={"var(--primary-color)"} px={"md"}>
                <Text c={"white"}>Fusce molestie condimentum facilisis</Text>
              </Accordion.Control>
              <Accordion.Panel px={"md"}>
                <Text size="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia minus quod accusantium officia ut. Beatae libero
                  perferendis nisi. Cumque, molestiae totam. Mollitia, aut
                  harum! Culpa ab natus tempore tempora earum.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
        <form className={classes["form-ctn"]}>
          <Stack gap={5}>
            <Text size="md" fw={"bold"} mt={"lg"}>
              Don t find your answer, Ask for support.
            </Text>
            <Text size="sm" c={"gray"}>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Led
              molestie accumsan dui, non iaculis primis in faucibu raesent eget
              sem purus.
            </Text>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <input type="text" placeholder="Subject" />
            <textarea
              name="description"
              id="des"
              cols={5}
              rows={5}
              placeholder="Message (Optional)"
            ></textarea>
            <Center>
              <Button w={"fit-content"} radius={"xl"} mb={"lg"} mt={"sm"}>
                Send Message
              </Button>
            </Center>
          </Stack>
        </form>
      </Group>
    </div>
  );
}

export default FAQ;
