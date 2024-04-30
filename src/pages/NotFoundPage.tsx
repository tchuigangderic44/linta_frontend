import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotFoundIcon from "./../assets/icons/404.svg?react";
import LeftArrow from "./../assets/icons/ArrowLeft.svg?react";
import HomeIcon from "./../assets/icons/House.svg?react";
import { Center, Title, Stack, Group, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
//type Props = {};

function NotFoundPage() {
  const navigate = useNavigate();
  const breakpoint = useMediaQuery("(max-width:360px)");
  return (
    <Center>
      <Stack mt={breakpoint ? "15vh" : undefined}>
        <NotFoundIcon />
        <Center>
          <Title order={breakpoint ? 3 : undefined}>404, Page not found</Title>
        </Center>
        <Center>
          <Group
            justify="center"
            align="center"
            gap={breakpoint ? 5 : undefined}
          >
            <Button
              radius={"xl"}
              leftSection={<LeftArrow />}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Go Back
            </Button>
            <Button
              radius={"xl"}
              variant="outline"
              leftSection={<HomeIcon />}
              component={NavLink}
              to={"/"}
            >
              Go To home
            </Button>
          </Group>
        </Center>
      </Stack>
    </Center>
  );
}

export default NotFoundPage;
