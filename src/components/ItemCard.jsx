import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import Quantity from "./Quantity";

const ItemCard = ({
  brand: { name: brandName, imgSrc: brandImgSrc },
  name,
  imgSrc,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      title={name}
      avatar={
        <Avatar
          sx={{ width: 100 }}
          variant="square"
          imgProps={{ sx: { objectFit: "contain" } }}
          src={brandImgSrc}
          title={brandName}
        />
      }
    />
    <CardMedia component="img" title={name} image={imgSrc} />
    <CardContent></CardContent>
    <CardActions>
      <Quantity />
    </CardActions>
  </Card>
);

export default ItemCard;
