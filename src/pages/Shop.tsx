import React from "react";
import { Group } from "@mantine/core";

import FilterProductPanel from "./../components/FilterProductPanel.component";
import ShopList from "../components/ShopList.component";
import { cartProductType } from "./../utils/cartProductType.ts";

import PhoneImage from "./../assets/products/0fde3cb34a30e1c40080fa607437adb64caa3545.png";
import AssetI from "./../assets/products/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png";
import AssetII from "./../assets/products/1cff38a3fc45d6416700a92128145a0a7a02d791.png";
import AssetIII from "./../assets/products/260c7a4b2c0a4a3071479d3ea04dbef308c19301.png";
import AssetIV from "./../assets/products/825df217dcf3ae6a903f7046fc417d331089432b.png";
import AssetV from "./../assets/products/9d00665ee4b654e7de1ac596c31da4b9f1994793.png";
//import AssetVI from "./../assets/products/d5df9baf5b845d5b649289426578b53ebaef4c65.png";
import AssetVII from "./../assets/products/ebb1aca726e944afe4e9b344a9d08d2cdf13f6ac.png";
import AssetVIII from "./../assets/products/f16c3be367d46067797d63f72c5d238bab2c834f.png";

//type Props = {};
const datas: cartProductType[] = [
  {
    id: "0",
    unitPrice: 500,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 3,
    images: [PhoneImage, AssetVII],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
  {
    id: "1",
    unitPrice: 100,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 5,
    images: [AssetI],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
  {
    id: "2",
    unitPrice: 500,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 5,
    images: [AssetII, AssetVII, AssetVIII],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
  {
    id: "3",
    unitPrice: 30,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 1,
    images: [AssetIII],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
  {
    id: "4",
    unitPrice: 1000,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 3,
    images: [AssetIV],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
  {
    id: "5",
    unitPrice: 500,
    name: "GoPro HERO6 4K Action Camera - Black",
    shop: "Nano Shop",
    star: 3,
    images: [AssetV],
    categorie: "Electronic",
    orderNumber: 130,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis quod illum eos dignissimos quisquam, suscipit est animi distinctio dicta quibusdam rerum quas, incidunt, repudiandae voluptates id. Qui, labore hic!",
  },
];

function Shop() {
  return (
    <Group
      gap={10}
      align="start"
      className="w-full container-with-padding "
      wrap="nowrap"
    >
      <FilterProductPanel />
      <ShopList products={datas} />
    </Group>
  );
}

export default Shop;
