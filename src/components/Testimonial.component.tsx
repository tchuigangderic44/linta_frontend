/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, ActionIcon, Box } from "@mantine/core";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import classes from "./../styles/eventcard.module.css";
import user from "./../assets/users/customer call.webp";
import RightArrow from "./../assets/icons/Right.svg?react";
type testimonial = { src: string; msg: string };
const DATA: testimonial[] = [
  {
    src: user,
    msg: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le ",
  },
  {
    src: user,
    msg: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer ",
  },
];
//type Props = {};

function Testimonial() {
  const swiperRef = useRef<any>(null);
  const [, /*activeIndex*/ setActiveIndex] = useState(0);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = (swiper: any) => {
    const currentSlideNumber = swiper.activeIndex + 1;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveIndex((_) => {
      return currentSlideNumber;
    });
  };

  return (
    <>
      <Box className={classes.ctnSliderTestimonial}>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          className={classes.sliderProfile}
          onSlideChange={handleSlideChange}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {DATA.map((d, i) => (
            <SwiperSlide key={i}>
              <div className={classes.containSlide}>
                <img
                  loading="lazy"
                  src={d.src}
                  alt={d.msg}
                  className={classes.userProfile}
                />
                <Text className={classes.msg}>{d.msg}</Text>
              </div>
            </SwiperSlide>
          ))}
          <ActionIcon
            component="button"
            size="xl"
            variant="white"
            radius={"xl"}
            styles={
              {
                /*root: {
                transform: "none",
                display: `${activeIndex === DATA.length - 1 ? "none" : ""}`,
              },*/
              }
            }
            className={classes.btr}
            onClick={() => handleNext()}
          >
            <RightArrow />
          </ActionIcon>
          <ActionIcon
            component="button"
            size="xl"
            variant="white"
            radius={"xl"}
            styles={
              {
                /*root: {
                transform: "none",
                display: `${activeIndex === 1 ? "none" : ""}`,
              },*/
              }
            }
            className={classes.btl}
            onClick={() => handlePrev()}
          >
            <RightArrow />
          </ActionIcon>
        </Swiper>
      </Box>
    </>
  );
}

export default Testimonial;
