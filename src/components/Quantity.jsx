import { Button, TextField, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Stack } from "@mui/system";
import { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(null);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ width: "100%" }}
    >
      {count === null ? (
        <Button onClick={() => setCount(1)}>Add to cart</Button>
      ) : (
        <>
          <IconButton
            aria-label="add"
            size="small"
            disabled={count === 0}
            onClick={() => setCount((i) => i - 1)}
          >
            <RemoveCircleOutlineIcon fontSize="inherit" />
          </IconButton>
          <TextField
            value={count}
            size="small"
            min={0}
            onChange={(ev) => {
              setCount(Number(ev.target.value));
            }}
            type="number"
            inputProps={{ inputMode: "numeric" }}
          />
          <IconButton
            aria-label="add"
            size="small"
            onClick={() => {
              console.log("teast");
              setCount((i) => i + 1);
            }}
          >
            <AddCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default Quantity;
