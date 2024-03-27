import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const BrowserRowNoData = () => {
  return (
    <TableRow>
      <TableCell colSpan={3} align='center'>
        Brak danych
      </TableCell>
    </TableRow>
  );
};

export default BrowserRowNoData;
