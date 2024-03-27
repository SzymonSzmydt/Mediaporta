import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { sortingOptions } from "../lib/data/sortingOprions";
import { ITags } from "../lib/types/api";
import BrowserTable from "./ui/BrowserTable";

interface IBrowserProps {
  selectedSort: { order: number; sort: number };
}

const Browser = ({ selectedSort }: IBrowserProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tagsList, setTagsList] = useState<ITags[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      setIsLoading(true);
      const order = sortingOptions?.order.en[selectedSort.order];
      const sort = sortingOptions?.sort.en[selectedSort.sort];
      const result = await fetch(
        `https://api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow`,
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
  }, [selectedSort]);
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant='h6'>Lista tagów</Typography>
      <BrowserTable data={tagsList} isLoading={isLoading} />
    </Paper>
  );
};

export default Browser;
