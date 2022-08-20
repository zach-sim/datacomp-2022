import { Container } from "@mui/material";
import ItemCard from "./components/ItemCard";
import items from "./data/items";
// import NavigationBar from './components/NavigationBar'
import MenuListComposition from "./components/NavigationBar.tsx";
import SearchAppBar from "./components/NavigationCard";

function App() {
  return (<>
    <Container sx={{ marginTop: "2em" }}>
      {items.map((item) => (
        <ItemCard {...item} />
      ))}
    </Container>
    {/* <NavigationBar /> */}
    <MenuListComposition />
    <SearchAppBar />
  </>
  );
}

export default App;
