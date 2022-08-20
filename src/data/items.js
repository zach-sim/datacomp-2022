import { uuid } from "lodash-uuid";
import { warehouse } from "./brands";
import warehouseTshirtImg1 from "../imgs/R1559513_20.jpg";

const items = [
  {
    id: uuid,
    name: "Mens Long Sleeve (White)",
    imgSrc: warehouseTshirtImg1,
    brand: warehouse,
  },
];
export default items;
