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

  return (
    <>
      <Stack direction="row" spacing={3} mb={2} sx={{ m: 2 }}>
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        ></Cards>
      <form>
          <TextField
            required
            id="outlined-required"
            name="number"
            label="Credit Number"
            value={state.number}
            variant="outlined"
            onChange={(evt) =>
              setState((orig) => ({ ...orig, number: evt.target.value }))
            }
            size="small"
            inputProps={{maxlength: 16}}
            maxLength="16"
            sx={{ width: 200, m: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            name="name"
            label="Name"
            value={state.name}
            variant="outlined"
            onChange={(evt) =>
              setState((orig) => ({ ...orig, name: evt.target.value }))
            }
            size="small"
            sx={{ display: "block", width: 200, m: 1 }}
          />
          <TextField
            required
            name="expiry"
            id="outlined-required"
            label="Valid Thru"
            value={state.expiry}
            variant="outlined"
            onChange={(evt) =>
              setState((orig) => ({ ...orig, expiry: evt.target.value }))
            }
            size="small"
            sx={{ width: 110, m: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            name="cvc"
            label="CVC"
            value={state.cvc}
            variant="outlined"
            onChange={(evt) =>
              setState((orig) => ({ ...orig, cvc: evt.target.value }))
            }
            onFocus={(evt) => setState((orig)=> ({ ...orig, focus: evt.target.name}))}
            size="small"
            sx={{ width: 75, m: 1 }}
          />
      </form>
      </Stack>
      <Button
        variant="contained"
        sx={{ float: "right", marginRight: 3 }}
        onClick={() => {
          window.parent.postMessage("paid", "*");
        }}
      >
        Submit
      </Button>
    </>
  );
};
export default PaymentGateway;
