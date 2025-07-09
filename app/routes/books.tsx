import { useGetBooksQuery } from "~/store/api/books/books.api";

const Books = () => {
  const { data: getAllBooksRes, ...getAllBooksApiState } = useGetBooksQuery();
  const getAllBookData = getAllBooksRes?.data;
  console.log(getAllBookData);
  return <div>Books:</div>;
};

export default Books;
