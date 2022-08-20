import { useState } from "react";
import Cards from "react-credit-cards";
import { TextField, Stack, Button } from "@mui/material";
import "react-credit-cards/es/styles-compiled.css";

const PaymentGateway = ({ amount }) => {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  return (
    <>
      <Stack direction="row" spacing={1} mb={2}>
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        >
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </form>
        </Cards>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Credit Number"
            value={state.number}
            variant="standard"
            onChange={(evt) =>
              setState((orig) => ({ ...orig, number: evt.target.value }))
            }
          />
        </div>
      </Stack>
      <Button variant="contained" sx={{ float: "right" }}>
        Submit
      </Button>
    </>
  );
};
export default PaymentGateway;
