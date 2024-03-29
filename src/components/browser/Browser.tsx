import { Paper, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { ITags } from "../lib/types/api";
import { ISelectedSort } from "../lib/types/initialStates";
import { generateUrl } from "../lib/utils/generateUrl";
import BrowserTable from "./ui/BrowserTable";

interface IBrowserProps {
  selectedSort: ISelectedSort;
}

const Browser = ({ selectedSort }: IBrowserProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarInfo, setSnackbarInfo] = useState("");
  const [tagsList, setTagsList] = useState<ITags[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = generateUrl(selectedSort);

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setTagsList(data.items);
        } else {
          if (response.status >= 400 && response.status <= 499) {
            setSnackbarInfo(
              "Podczas pobierania danych wystąpił błąd po stronie klienta!"
            );
          }
          if (response.status >= 500 && response.status <= 599) {
            setSnackbarInfo(
              "Podczas pobierania danych wystąpił błąd po stronie serwera!"
            );
          }
          throw new Error(`Wystąpił błąd: ${response.status}`);
        }
      } catch (error) {
        console.log("Wystąpił błąd podczas pobierania danych: ");
        console.error("Treść błędu: ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [selectedSort]);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant='h6'>Lista tagów</Typography>
      <BrowserTable data={tagsList} isLoading={isLoading} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!snackbarInfo}
        onClose={() => setSnackbarInfo("")}
        message={snackbarInfo}
      />
    </Paper>
  );
};

export default Browser;
