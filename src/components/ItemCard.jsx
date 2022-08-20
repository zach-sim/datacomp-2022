import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Quantity from "./Quantity";

const ItemCard = ({
  brand: { name: brandName, imgSrc: brandImgSrc },
  name,
  imgSrc,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" title={name} image={imgSrc} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <Avatar
        sx={{ width: 100 }}
        variant="square"
        imgProps={{ sx: { objectFit: "contain" } }}
        src={brandImgSrc}
        title={brandName}
      />
    </CardContent>
    <CardActions>
      <Quantity />
    </CardActions>
  </Card>
);

export default ItemCard;
