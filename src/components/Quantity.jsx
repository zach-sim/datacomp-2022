import { Button, TextField, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Stack } from "@mui/system";

const Quantity = ({ qty, changeQty }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ width: "100%" }}
    >
      {qty === undefined ? (
        <Button
          onClick={() => changeQty(1)}
          variant="contained"
          color="primary"
        >
          Add to cart
        </Button>
      ) : (
        <>
          <IconButton
            aria-label="add"
            size="small"
            disabled={qty === 0}
            onClick={() => changeQty(-1)}
            color="primary"
          >
            <RemoveCircleOutlineIcon fontSize="inherit" />
          </IconButton>
          <TextField
            value={qty}
            size="small"
            min={0}
            onChange={(ev) => {
              const val = Number(ev.target.value);
              changeQty(val < 0 ? 0 : val - qty);
            }}
            sx={{ width: "5em" }}
            type="number"
            inputProps={{ inputMode: "numeric" }}
          />
          <IconButton
            aria-label="add"
            size="small"
            onClick={() => {
              changeQty(1);
            }}
            color="primary"
          >
            <AddCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default Quantity;
