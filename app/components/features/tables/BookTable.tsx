import Loader from "~/components/Loader";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { useGetBooksQuery } from "~/store/api/books/books.api";

function BookTable() {
  const { data: getAllBooksRes, ...getAllBooksApiState } = useGetBooksQuery();
  const getAllBookData = getAllBooksRes?.data;

  // api state
  if (getAllBooksApiState.isLoading || getAllBooksApiState.isFetching) {
    return <Loader />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Books</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getAllBookData?.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>{item.isbn}</TableCell>
                <TableCell>{item.copies}</TableCell>
                <TableCell>
                  {item.available ? (
                    <Badge variant="secondary">Available</Badge>
                  ) : (
                    <Badge variant="destructive">Not Available</Badge>
                  )}
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default BookTable;
