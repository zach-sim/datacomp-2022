import { uuid } from "lodash-uuid";
import warehouseLogoImg from "../imgs/warehouse-logo.png";

export const warehouse = {
  id: uuid(),
  name: "The Warehouse",
  imgSrc: warehouseLogoImg,
};

export default Object.fromEntries(
  [warehouse].map((brand) => [brand.id, brand])
);
