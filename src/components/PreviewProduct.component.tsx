/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Flex,
  Group,
  MantineStyleProp,
  Image,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./../styles/view-product.module.css";
import { useNavigate } from "react-router-dom";
import LeftArrow from "./../assets/icons/right-icon.svg?react";
import RightArrow from "./../assets/icons/right-icon.svg?react";
import PhoneImage from "./../assets/products/0fde3cb34a30e1c40080fa607437adb64caa3545.png";
import AssetI from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import AssetII from "./../assets/products/1cff38a3fc45d6416700a92128145a0a7a02d791.png";

import { cartProductType } from "../utils/cartProductType";
const boxInterStyle: MantineStyleProp = {
  border: "1px solid #DEE2E7",
  borderRadius: "6px",
};

type previewProps = {
  data: cartProductType | null;
};

import "swiper/css";
function PreviewImage({ data }: previewProps) {
  const navigate = useNavigate();
  const images = data ? data.images : [PhoneImage, AssetI, AssetII];

  const [slideIndex, setSlideIndex] = useState(0);
  const breakpointIII = useMediaQuery("(max-width:530px)");

  useLayoutEffect(() => {
    showSlides(slideIndex);
  }, []);

  const swiperRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveIndex] = useState(1);
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
    const currentSlideNumber = swiper.activeIndex;
    setSlideIndex(currentSlideNumber);
    setActiveIndex(() => {
      return currentSlideNumber;
    });
  };
  // Thumbnail image controls
  function currentSlide(n: number) {
    setSlideIndex(n);
    showSlides(slideIndex);
  }

  function showSlides(n: number) {
    if (n > images!.length) {
      setSlideIndex(0);
    }
    if (n < 0) {
      setSlideIndex(images!.length - 1);
    }
    if (swiperRef.current) {
      //swiperRef.current.swiper.slideTo(2);
    }
  }

  useEffect(() => {
    swiperRef.current.swiper.slideTo(slideIndex);
  }, [slideIndex]);

  return (
    <>
      <Flex
        className={classes["product-preview"]}
        direction={"column"}
        gap={26}
      >
        <Box
          w={"100%"}
          style={breakpointIII ? undefined : boxInterStyle}
          className={classes["product-preview-img-ctn"]}
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            className={classes["product-preview-list"]}
            //modules={[Autoplay]}
          >
            {images?.map((d, i) => (
              <SwiperSlide key={i}>
                <Image
                  loading="lazy"
                  src={d}
                  w={"100%"}
                  h={"100%"}
                  alt={"Image Preview"}
                  fit="contain"
                  //mx={"auto"}
                />
              </SwiperSlide>
            ))}
            {breakpointIII && (
              <Box>
                <ActionIcon
                  component="button"
                  size="md"
                  variant="white"
                  radius={"lg"}
                  className={classes.btnBack}
                  onClick={() => navigate(-1)}
                >
                  <RightArrow width={13} />
                </ActionIcon>
                {images.length > 1 && (
                  <ActionIcon.Group className={classes["btn-wrapper"]}>
                    <ActionIcon
                      component="button"
                      size="md"
                      variant="white"
                      radius={"xl"}
                      className={classes.btr}
                      onClick={() => handlePrev()}
                    >
                      <RightArrow width={13} />
                    </ActionIcon>
                    <ActionIcon
                      component="button"
                      size="md"
                      variant="white"
                      radius={"xl"}
                      className={classes.btl}
                      onClick={() => handleNext()}
                    >
                      <LeftArrow width={13} />
                    </ActionIcon>
                  </ActionIcon.Group>
                )}
              </Box>
            )}
          </Swiper>
        </Box>
        <Group
          align="center"
          justify="center"
          gap={9}
          className={classes["thumbmails-ctn"]}
          wrap="nowrap"
          w={"100%"}
        >
          {images?.map((src, index) => (
            <Box
              h={47}
              style={{
                ...boxInterStyle,
                borderColor: `${
                  slideIndex === index ? "var(--primary-color)" : "#DEE2E7"
                }`,
              }}
              className={classes.thumb}
              onClick={() => currentSlide(index)}
              p={5}
              key={index}
            >
              <Image
                loading="lazy"
                src={src}
                w={"100%"}
                h={"100%"}
                alt={"Image Preview"}
                fit="contain"
              />
            </Box>
          ))}
        </Group>
      </Flex>
    </>
  );
}
export default PreviewImage;
