import { ThemeProvider } from "@emotion/react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import { themeWithLocale } from "../../utils/themes/localeThemes";
import { ITags } from "../../utils/types/api";

interface IBrowseTable {
  data: ITags[] | null;
}

export default function BrowserTable({ data }: IBrowseTable) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: "var(--container)", overflow: "hidden", margin: "0 auto" }}
    >
      <ThemeProvider theme={themeWithLocale}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell>Lp.</TableCell>
                <TableCell align='right' component='td'>
                  Tagi
                </TableCell>
                <TableCell align='right' component='td'>
                  Liczba postów
                </TableCell>
                <TableCell align='right' component='td'>
                  Użytkownik
                </TableCell>
                <TableCell align='right' component='td'>
                  reputacja
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.length > 0 ? (
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => {
                    return (
                      <TableRow key={row.title}>
                        <TableCell>{idx + 1 + page * rowsPerPage}</TableCell>
                        <TableCell align='right'>
                          {row.tags.map((tag) => `${tag}, `)}
                        </TableCell>
                        <TableCell align='right'>{row.answer_count}</TableCell>
                        <TableCell align='right'>
                          {row.owner.display_name}
                        </TableCell>
                        <TableCell align='right'>
                          {row.owner.reputation}
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>Brak danych</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {data && (
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component='div'
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </ThemeProvider>
    </Paper>
  );
}
