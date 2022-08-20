import { Container } from "@mui/material";
import ItemCard from "./components/ItemCard";
import items from "./data/items";

function App() {
  return (
    <Container sx={{ marginTop: "2em" }}>
      {items.map((item) => (
        <ItemCard {...item} />
      ))}
    </Container>
  );
}

export default App;
