import { Stack } from "@mui/material";
import Browser from "./components/browser/Browser";
import Header from "./components/header/Header";
import SortingElement from "./components/sorting/SortingElement";

function App() {
  return (
    <>
      <Header />
      <Stack width='var(--container)' margin='0.5rem auto' gap={1}>
        <SortingElement />
        <Browser />
      </Stack>
    </>
  );
}

export default App;
