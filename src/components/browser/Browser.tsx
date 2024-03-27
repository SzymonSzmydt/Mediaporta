import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ITags } from "../utils/types/api";
import BrowserTable from "./ui/BrowserTable";

const Browser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tagsList, setTagsList] = useState<ITags[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      setIsLoading(true);
      const result = await fetch(
        "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow",
        { signal }
      );
      const data = await result.json();
      setTagsList(data.items);
      setIsLoading(false);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <Paper sx={{ width: "var(--container)", margin: "1rem auto", padding: 2 }}>
      <Typography variant='h6'>Lista tagów</Typography>
      <BrowserTable data={tagsList} isLoading={isLoading} />
    </Paper>
  );
};

export default Browser;
