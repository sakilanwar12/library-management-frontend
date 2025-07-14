import { useParams } from "react-router";
import Loader from "~/components/Loader";
import { useGetBookByIdQuery } from "~/store/api/books/books.api";

const SingleBook = () => {
  const { id } = useParams();
  const { data: getBookRes, ...getBookApiState } = useGetBookByIdQuery({
    id,
  });
  const getBookData = getBookRes?.data;
  if (getBookApiState.isLoading || getBookApiState.isFetching) {
    return <Loader />;
  }
  const { title, author, genre, isbn, description, copies, available } =
    getBookData || {};
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div>Author: {author}</div>
      <div>Genre: {genre}</div>
      <div>ISBN: {isbn}</div>
      <div>Description: {description}</div>
      <div>Copies: {copies}</div>
      <div>Available: {available ? "Yes" : "No"}</div>
    </div>
  );
};

export default SingleBook;
