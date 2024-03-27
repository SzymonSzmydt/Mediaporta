import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const BrowserTableHead = () => {
  return (
    <TableHead>
      <TableRow sx={{ "& th": { fontWeight: 600 } }}>
        <TableCell width={"4rem"}>Lp.</TableCell>
        <TableCell>Nazwa tagu</TableCell>
        <TableCell align='right'>Posty</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BrowserTableHead;
