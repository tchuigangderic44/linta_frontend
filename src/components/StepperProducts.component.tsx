import React from "react";
import { Stepper, StepperProps, rem, Box, Text, Stack } from "@mantine/core";
import BookIcon from "./../assets/icons/Notebook.svg?react";
import PackageIcon from "./../assets/icons/package-orange.svg?react";
import TruckIcon from "./../assets/icons/truck-orange.svg?react";
import DeliveredIcon from "./../assets/icons/handshake-orange.svg?react";
import classes from "./../styles/dashboard.module.css";
function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        step: {
          padding: 0,
          flexDirection: "column",
          alignItems: "center",
          border: "1px",
        },
        stepLabel: {
          position: "absolute",
          top: 10,
          left: -40,
        },
        stepBody: {
          position: "relative",
        },
        stepIcon: {
          borderWidth: rem(0),
        },
        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
        stepWrapper: {
          border: "1px solid var(--mantine-color-orange-6)",
          borderRadius: "50%",
        },
      }}
      {...props}
    />
  );
}
function StepperProducts() {
  return (
    <StyledStepper
      className={classes["step-wrapper"]}
      active={1}
      iconSize={20}
      color="orange"
      w={"90%"}
      mx={"auto"}
      my={"xl"}
    >
      <Stepper.Step
        icon={<></>}
        styles={{ stepLabel: { left: -25 } }}
        label={
          <Stack gap={5} align="center" w={"-webkit-max-content"}>
            <BookIcon />
            <Text size="xs">Order Placed</Text>
          </Stack>
        }
      />
      <Stepper.Step
        styles={{ stepLabel: { left: -32 } }}
        label={
          <Stack gap={5} align="center" w={"-webkit-max-content"}>
            <PackageIcon />
            <Text size="xs">Packaging</Text>
          </Stack>
        }
        icon={<Box className={classes["step-indice"]}></Box>}
      />
      <Stepper.Step
        styles={{ stepLabel: { left: -20 } }}
        label={
          <Stack gap={5} align="center" w={"-webkit-fit-content"}>
            <TruckIcon />
            <Text size="xs">On The Road</Text>
          </Stack>
        }
        icon={<></>}
      />
      <Stepper.Step
        styles={{ stepLabel: { left: -30 } }}
        label={
          <Stack gap={5} align="center" w={"-webkit-max-content"}>
            <DeliveredIcon />
            <Text size="xs">Delivered</Text>
          </Stack>
        }
        icon={<></>}
      />
    </StyledStepper>
  );
}

export default StepperProducts;
