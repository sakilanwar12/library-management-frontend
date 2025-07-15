
import Loader from "~/components/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { useGetBorrowBooksQuery } from "~/store/api/borrow/borrow.api";

function BorrowBookTable() {
  const { data: getBorrowBooksRes, ...getAllBooksApiState } =
    useGetBorrowBooksQuery();
  const getAllBookData = getBorrowBooksRes?.data;

  // api state
  if (getAllBooksApiState.isLoading || getAllBooksApiState.isFetching) {
    return <Loader />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Borrow Book Summery</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getAllBookData?.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.book?.title}</TableCell>
                <TableCell>{item?.book?.isbn}</TableCell>
                <TableCell>{item.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default BorrowBookTable;
