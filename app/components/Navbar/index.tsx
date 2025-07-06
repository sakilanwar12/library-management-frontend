import { Link } from "react-router";

function Navbar() {
  return (
    <header className="flex justify-center py-4 shadow-md ">
      <div className="container">
        <div className="flex">
          <div className="flex-1">
            <Link to="/" className="text-sm font-medium hover:text-blue-500">
              Library Management
            </Link>
          </div>
          <div className="flex-none">
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium hover:text-blue-500">
                All Books
              </Link>
              <Link to="/add-book" className="text-sm font-medium hover:text-blue-500">
                Add Book
              </Link>
              <Link to="/borrow-summery" className="text-sm font-medium hover:text-blue-500">
                Borrow Summary
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
