import { Paper, Stack } from "@mui/material";
import { useState } from "react";
import Browser from "./components/browser/Browser";
import Header from "./components/header/Header";
import { sortingOptions } from "./components/lib/data/sortingOprions";
import SortingElement from "./components/sorting/SortingElement";

function App() {
  const [selectedSort, setSelectedSort] = useState({ order: 1, sort: 1 });

  return (
    <>
      <Header />
      <Stack
        width={"100%"}
        maxWidth='var(--container)'
        margin='0.5rem auto'
        gap={1}
      >
        <Paper sx={{ padding: 2, display: "flex", gap: 4 }}>
          <SortingElement
            name={"Kolejność"}
            options={sortingOptions?.order.pl}
            selectedIndex={selectedSort.order}
            setSelectedSort={setSelectedSort}
          />
          <SortingElement
            name={"Sortowanie według"}
            options={sortingOptions?.sort.pl}
            selectedIndex={selectedSort.sort}
            setSelectedSort={setSelectedSort}
          />
        </Paper>
        <Browser selectedSort={selectedSort} />
      </Stack>
    </>
  );
}

export default App;
