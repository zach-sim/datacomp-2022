import { useCallback, useState, useMemo } from "react";
import {
  Alert,
  Box,
  Container,
  Grid,
  Button,
  Modal,
  Paper,
} from "@mui/material";
import Provider from "./components/Provider";
import ItemCard from "./components/ItemCard";
import items from "./data/items";
import paymentGatewayImg1 from "./imgs/PaymentGateway1.png";
import paymentGatewayImg2 from "./imgs/PaymentGateway2.png";
import PaymentGateway from "./components/PaymentGateway";

function App() {
  const [quantaties, setQuantaties] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const totalQty = useMemo(
    () => Object.values(quantaties).reduce((p, c) => p + c, 0),
    [quantaties]
  );
  const [open, setOpen] = useState(false);

  const modifyQty = useCallback(
    (id, price, changeQty) => {
      console.log("modifyQty", id, price, changeQty);
      setQuantaties((oldState) => {
        setTotalPrice((oldPrice) => oldPrice + changeQty * price);
        return {
          ...oldState,
          [id]: (oldState[id] || 0) + changeQty,
        };
      });
    },
    [setQuantaties, setTotalPrice]
  );
  return (
    <Provider>
      <Container sx={{ marginTop: "2em" }}>
        {totalPrice > 0 && (
          <Alert
            color="secondary"
            action={
              <Button
                onClick={() => setOpen(true)}
                color="secondary"
                sx={{ float: "right" }}
              >
                Checkout
              </Button>
            }
          >
            You have <strong>{totalQty}</strong> item{totalQty > 1 && "s"} in
            your cart for a total of <strong>${totalPrice}</strong>
          </Alert>
        )}
        {open && (
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Paper
              component={Box}
              p={2}
              sx={{
                margin: "0 auto",
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            >
              <PaymentGateway />
            </Paper>
          </Modal>
        )}
        <Grid container spacing={2} mt={2}>
          {items.map((item) => (
            <Grid item key={item.id}>
              <ItemCard
                {...item}
                qty={quantaties[item.id]}
                {...{ modifyQty }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
