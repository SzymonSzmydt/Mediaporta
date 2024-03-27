import { ThemeProvider } from "@emotion/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { themeWithLocale } from "../../lib/themes/localeThemes";
import { ITags } from "../../lib/types/api";
import BrowserRowIsLoading from "./BrowserRowIsLoading";
import BrowserRowNoData from "./BrowserRowNoData";
import BrowserTableHead from "./BrowserTableHead";
import BrowserTableRow from "./BrowserTableRow";

interface IBrowseTable {
  data: ITags[] | null;
  isLoading: boolean;
}

export default function BrowserTable({ data, isLoading }: IBrowseTable) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <ThemeProvider theme={themeWithLocale}>
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
        <TableContainer sx={{ height: "calc(100vh - 19rem)" }}>
          <Table stickyHeader aria-label='sticky table'>
            <BrowserTableHead />
            <TableBody>
              {isLoading ? (
                <BrowserRowIsLoading />
              ) : data && data?.length > 0 ? (
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <BrowserTableRow
                      key={`${row.name}-${row.count}`}
                      lp={idx + 1 + page * rowsPerPage}
                      name={row.name}
                      count={row.count}
                    />
                  ))
              ) : (
                <BrowserRowNoData />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  );
}
