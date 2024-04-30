import React from "react";
import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./../styles/home.module.css";

import Form from "../components/Form.component";
import CardList from "../components/CardList.component";
import EventProductList from "../components/EventProductList.component";
import EventCardList from "../components/EventCardList.component";
import Testimonial from "../components/Testimonial.component";

//type Props = {}

function Home() {
  const breakpoint = useMediaQuery("(max-width: 725px)");
  const breakpointI = useMediaQuery("(max-width: 475px)");

  return (
    <div className="container-with-padding ">
      <section className={classes.hero}>
        <Form />
      </section>
      <CardList />
      <Title order={breakpoint ? 5 : 3} mb={breakpointI ? 15 : 20}>
        Decouvrez des meubles adaptés à vos evenements{" "}
      </Title>
      <EventProductList />
      <Title order={breakpoint ? 5 : 3} fw={"bold"} my={breakpointI ? 15 : 20}>
        The most ordered
      </Title>
      <EventCardList />
      <Title order={breakpoint ? 5 : 3} my={breakpointI ? 15 : 20}>
        Our customers do the talking for us
      </Title>
      <Testimonial />
    </div>
  );
}

export default Home;
