import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Anchor, Group, Flex } from "@mantine/core";
import EventCard, { CardEventType, EventCardBox } from "./EventCard.component";
import "./../styles/eventCardList.css";
import { useMediaQuery } from "@mantine/hooks";

import { CategorieEvent } from "../utils/CategorieEventType";
import EventImageI from "../assets/eventProducts/image 15.webp";
import EventImageII from "../assets/eventProducts/image 16.webp";
import EventImageIII from "../assets/eventProducts/image 17.webp";
import EventImageIV from "../assets/eventProducts/image 19.webp";
import EventImageV from "../assets/eventProducts/image 18.webp";

import "../styles/eventCardList.css";
const categories: CategorieEvent[] = ["Chair", "Table", "Tent"];

const datas: CardEventType[] = [
  {
    categorie: "Chair",
    imgURL: EventImageI,
    eventName: "Chair for event",
    unitPrice: 500,
  },
  {
    categorie: "Table",
    imgURL: EventImageII,
    eventName: "Table for event",
    unitPrice: 500,
  },
  {
    categorie: "Tent",
    imgURL: EventImageIII,
    eventName: "Chair for event",
    unitPrice: 500,
  },
  {
    categorie: "Chair",
    imgURL: EventImageIV,
    eventName: "Chair for event",
    unitPrice: 500,
  },
  {
    categorie: "Tent",
    imgURL: EventImageV,
    eventName: "Tent for event",
    unitPrice: 500,
  },
  {
    categorie: "Chair",
    imgURL: EventImageI,
    eventName: "Chair for event",
    unitPrice: 500,
  },
];

//type Props = {}
function EventCardList() {
  const breakpoint = useMediaQuery("(max-width: 825px)");
  const breakpointII = useMediaQuery("(max-width: 620px)");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //const [loading, setLoading] = useState(true);
  const [eventCards, setEventCard] = useState<CardEventType[]>([]);
  //const [search, setSearch] = useState(searchParams.get("q") || "");
  const [categorie, setCategorie] = useState(
    searchParams.get("categorie") || "all"
  );
  useEffect(() => {
    // Update URL parameters when search or category changes
    const updateURLParams = () => {
      const params = new URLSearchParams();
      //if (search) params.set("q", search);
      if (categorie && categorie !== "all") params.set("categorie", categorie);

      // Replace the current URL with the updated parameters
      if (categorie !== "all") {
        window.history.replaceState(
          {},
          "",
          `${location.pathname}?${params.toString()}`
        );
      } else {
        window.history.replaceState({}, "", `${location.pathname}`);
      }
    };

    updateURLParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorie]);

  useEffect(() => {
    let events: CardEventType[] = [...datas];
    if (categorie !== "all") {
      events = events.filter((p) => {
        return p.categorie === categorie;
      });
    }
    setEventCard(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorie, datas]);
  return (
    <>
      {!breakpointII ? (
        <>
          <Group justify="center">
            <Anchor
              href="#all"
              className={categorie == "all" ? "fselect" : "" + "filterLink"}
              onClick={(e) => {
                e.preventDefault();
                setCategorie("all");
              }}
            >
              All
            </Anchor>
            {categories.map((c) => (
              <Anchor
                href={"#" + c}
                key={c}
                className={categorie == c ? "fselect" : "" + "filterLink"}
                onClick={(e) => {
                  e.preventDefault();
                  //@ts-expect-error not defined
                  setCategorie(c);
                }}
              >
                {c}
              </Anchor>
            ))}
          </Group>
          <Flex
            justify={eventCards.length !== 2 ? "space-between" : "flex-start"}
            wrap={"wrap"}
            gap={breakpoint ? 10 : 20}
            mt={40}
          >
            {eventCards.map((d, i) => (
              <EventCard key={i} {...d} />
            ))}
          </Flex>
        </>
      ) : (
        <>
          {categories.map((c, i) => (
            <EventCardBox categorie={c} datas={datas} key={i} />
          ))}
        </>
      )}
    </>
  );
}

export default EventCardList;
