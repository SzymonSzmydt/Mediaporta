import { Stack } from "@mui/material";
import Browser from "./components/browser/Browser";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
          <Stack direction={"row"}>
              
        <Browser />
      </Stack>
    </>
  );
}

export default App;
