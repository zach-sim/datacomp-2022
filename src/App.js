import { Container } from "@mui/material";
import Provider from "./components/Provider";
import ItemCard from "./components/ItemCard";
import items from "./data/items";

function App() {
  return (
    <Provider>
      <Container sx={{ marginTop: "2em" }}>
        {items.map((item) => (
          <ItemCard {...item} />
        ))}
      </Container>
    </Provider>
  );
}

export default App;
