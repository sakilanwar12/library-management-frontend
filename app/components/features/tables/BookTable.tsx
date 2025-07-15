import { Eye, SquarePenIcon, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";
import Loader from "~/components/Loader";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
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
import { EditBook } from "../modals/EditBook";
import DeleteBook from "../modals/DeleteBook";
import { Link } from "react-router";
import { BorrowBook } from "../modals/BorrowBook";
import { BasicPagination } from "~/components/BasicPagination";

function BookTable() {
  const { data: getAllBooksRes, ...getAllBooksApiState } = useGetBooksQuery();
  const getAllBookData = getAllBooksRes?.data;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // You can adjust this number

  // Calculate pagination values
  const totalItems = getAllBookData?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Get current page data
  const currentData = useMemo(() => {
    if (!getAllBookData) return [];
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return getAllBookData.slice(startIndex, endIndex);
  }, [getAllBookData, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  };

  // Reset to first page when data changes
  const handleDataChange = () => {
    setCurrentPage(1);
  };

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
            {currentData?.map((item) => (
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
                <TableCell className="flex gap-2">
                  <BorrowBook id={item?._id} />
                  <EditBook id={item?._id} isEdit={true} />
                  <DeleteBook id={item?._id} />
                  <Button asChild variant={"secondary"}>
                    <Link to={`/books/${item?._id}`}>
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        

          {/* Pagination Component */}
          <div className="flex items-center justify-center space-x-2 py-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {/* Page Numbers */}
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  Math.abs(page - currentPage) <= 1;
                
                const showEllipsis = 
                  (page === 2 && currentPage > 4) || 
                  (page === totalPages - 1 && currentPage < totalPages - 3);

                if (!showPage && !showEllipsis) {
                  return null;
                }

                if (showEllipsis) {
                  return (
                    <span key={page} className="px-2 py-1 text-sm">
                      ...
                    </span>
                  );
                }

                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="min-w-[32px]"
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
   
      </CardContent>
    </Card>
  );
}

export default BookTable;