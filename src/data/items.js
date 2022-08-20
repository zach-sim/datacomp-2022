import { uuid } from "lodash-uuid";
import { warehouse } from "./brands";
import warehouseTshirtImg1 from "../imgs/R1559513_20.jpg";
import warehouseGreySocks from "../imgs/R2434064_30.jpg";
import warehouseKettleImg from "../imgs/R2345238_30.jpg";

const items = [
  {
    id: uuid(),
    name: "Mens Short Sleeve (White)",
    price: 11,
    imgSrc: warehouseTshirtImg1,
    brand: warehouse,
  },
  {
    id: uuid(),
    name: "Low Cut Socks (Grey)",
    price: 12,
    imgSrc: warehouseGreySocks,
    brand: warehouse,
  },
  {
    id: uuid(),
    name: "1.7 Litre Kettle",
    price: 13,
    imgSrc: warehouseKettleImg,
    brand: warehouse,
  },
];
export default items;
