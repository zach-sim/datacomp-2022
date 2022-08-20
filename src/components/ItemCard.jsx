import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { useCallback } from "react";
import Quantity from "./Quantity";

const ItemCard = ({
  brand: { name: brandName, imgSrc: brandImgSrc },
  name,
  id,
  imgSrc,
  price,
  qty,
  modifyQty,
}) => {
  const changeQty = useCallback(
    (newQty) => modifyQty(id, price, newQty),
    [modifyQty, price, id]
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        title={name}
        image={imgSrc}
        sx={{ padding: "1em" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="h5">${price}</Typography>
          <Avatar
            sx={{ width: 100 }}
            variant="square"
            imgProps={{ sx: { objectFit: "contain" } }}
            src={brandImgSrc}
            title={brandName}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Quantity {...{ qty, changeQty }} />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
