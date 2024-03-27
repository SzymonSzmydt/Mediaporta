import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface IRowProps {
  lp: number;
  name: string;
  count: number;
}

const BrowserTableRow = ({ lp, name, count }: IRowProps) => {
  return (
    <TableRow
      sx={{
        "&:nth-of-type(2n+1)": {
          backgroundColor: "var(--nth-color)",
        },
      }}
    >
      <TableCell>{lp}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align='right'>{count}</TableCell>
    </TableRow>
  );
};

export default BrowserTableRow;
