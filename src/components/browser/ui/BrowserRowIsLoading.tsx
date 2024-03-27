import { CircularProgress } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const BrowserRowIsLoading = () => {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <CircularProgress
          size={20}
          sx={{ display: "block", margin: "0 auto" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default BrowserRowIsLoading;
