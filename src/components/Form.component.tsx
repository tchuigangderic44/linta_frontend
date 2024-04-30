import React, { useState } from "react";
import {
  TextInput,
  Button,
  Box,
  Text,
  NumberInput,
  Stepper,
  Group,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Calendar from "./../assets/icons/calendar.svg?react";
import classes from "./../styles/home.module.css";
//type Props = {};

function Form() {
  const secondbp = useMediaQuery("(max-width: 380px)");
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => {
      //if (form.validate().hasErrors) {
      //return current;
      //}
      return current < 1 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  /*const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });*/
  return (
    <Box className={classes.box}>
      <form className={classes["desktop-form"]}>
        <Title order={4}>Quick Order</Title>
        <TextInput
          label="First which piece of furniture do you want today"
          placeholder="ex: I need chairs for a crusade"
          size="sm"
          radius={"md"}
        />
        <NumberInput
          label="what quantity"
          placeholder="ex: 200"
          hideControls
          mt={"7"}
          size="sm"
          radius={"md"}
        />
        <TextInput
          type="date"
          label="For which period "
          placeholder="ex: 01-03/01/2023"
          mt="7"
          size="sm"
          rightSection={<Calendar />}
          radius={"md"}
        />
        <TextInput
          type="tel"
          label="Your Phone Number "
          placeholder="ex: +237 697 00 00 00"
          radius={"md"}
          mt="7"
          size="sm"
        />
        <Button
          type="submit"
          mx="auto"
          display={"block"}
          size="compact-lg"
          px={"xl"}
          radius={"md"}
          mt="7"
          fz={"lg"}
        >
          order
        </Button>
      </form>
      <div className={classes["mobile-form"]}>
        <Stepper
          active={active}
          styles={{
            steps: {
              display: "none",
            },
            content: {
              paddingTop: 0,
            },
          }}
        >
          <Stepper.Step>
            <Text fw={"bold"} className={classes["mobile-form-text"]}>
              Quick Order
            </Text>
            <TextInput
              label="First which piece of furniture do you want today"
              placeholder="ex: I need chairs for a crusade"
              className={classes["mobile-form-text"]}
              radius={"md"}
            />
            <NumberInput
              label="what quantity"
              placeholder="ex: 200"
              hideControls
              className={classes["mobile-form-text"]}
              radius={"md"}
            />
          </Stepper.Step>

          <Stepper.Completed>
            <TextInput
              type="date"
              label="For which period "
              placeholder="ex: 01-03/01/2023"
              className={classes["mobile-form-text"]}
              rightSection={<Calendar />}
              radius={"md"}
            />
            <TextInput
              type="tel"
              label="Your Phone Number "
              placeholder="ex: +237 697 00 00 00"
              radius={"md"}
              className={classes["mobile-form-text"]}
            />
          </Stepper.Completed>

          {/*<Stepper.Step label="Final step" description="Social media">
            <TextInput
              label="Website"
              placeholder="Website"
              //{...form.getInputProps("website")}
            />
            <TextInput
              mt="md"
              label="GitHub"
              placeholder="GitHub"
              //{...form.getInputProps('github')}
            />
        </Stepper.Step>
          <Stepper.Completed>Completed! Form values</Stepper.Completed>*/}
        </Stepper>
        <Group justify="flex-end" mt="xs">
          {active !== 0 && (
            <Button
              variant="default"
              size={secondbp ? "xs" : "sm"}
              onClick={prevStep}
            >
              Back
            </Button>
          )}
          {active !== 1 && (
            <Button size={secondbp ? "xs" : "sm"} onClick={nextStep}>
              Next step
            </Button>
          )}
          {active === 1 && <Button size={secondbp ? "xs" : "sm"}>Order</Button>}
        </Group>
      </div>
    </Box>
  );
}
export default Form;
