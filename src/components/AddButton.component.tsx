import React, { useEffect } from "react";
import { Button, NumberInput, Text } from "@mantine/core";
type Props = {
  number: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
  min?: number;
  max?: number;
  handleChange: (v: number) => void;
};

function AddButton({
  number,
  setValue,
  handleChange,
  min,
  max,
  handleIncrement,
  handleDecrement,
}: Props) {
  useEffect(() => {
    if (min != undefined && number < min) {
      setValue(min);
      handleChange(min);
    }
    if (max != undefined && number > max) {
      setValue(max);
      handleChange(max);
    }
  }, [number]);
  return (
    <Button.Group w={"100%"}>
      <Button
        variant="default"
        size="sm"
        w={"33%"}
        onClick={() => {
          setValue((value: number) => value - 1);
          handleDecrement!();
        }}
        rightSection={
          <Text size="1.3em" fw={"bold"} pr={"md"}>
            -
          </Text>
        }
      />
      <NumberInput
        value={number}
        radius={"xs"}
        hideControls
        size="sm"
        w={"33%"}
        onBlur={(e) => {
          setValue(parseInt(e.target.value));
          handleChange(parseInt(e.target.value));
        }}
        styles={{
          input: {
            textAlign: "center",
          },
        }}
      />
      <Button
        variant="default"
        size="sm"
        w={"33%"}
        onClick={() => {
          setValue((value: number) => value + 1);
          handleIncrement!();
        }}
        rightSection={
          <Text size="1.3em" fw={"bold"} pr={"md"} c={"var(--primary-color)"}>
            +
          </Text>
        }
      />
    </Button.Group>
  );
}

export default AddButton;
/**
 * <Button.Group >
        <Button variant="default" w={"35%"}>
          <Text size="lg" fw={"bold"}>
            -
          </Text>
        </Button>
        <NumberInput
          defaultValue={1}
          radius={"xs"}
          hideControls
          
          styles={{
            input: {
              textAlign: "center",
            },
          }}
        />
        <Button variant="default" >
          <Text size="lg" fw={"bold"} c="var(--primary-color)">
            +
          </Text>
        </Button>
      </Button.Group>
 */
