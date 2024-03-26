import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ITags } from "../utils/types/api";
import BrowserTable from "./ui/BrowserTable";

const Browser = () => {
  const [tagsList, setTagsList] = useState<ITags[] | null>(null);
  console.log("🚀 ~ Browser ~ data:", tagsList);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow"
      );
      const data = await result.json();
      setTagsList(data.items);
    };

    fetchData();
  }, []);
  return (
    <Stack>
      <BrowserTable data={tagsList} />
    </Stack>
  );
};

export default Browser;
