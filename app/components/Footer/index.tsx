import { Separator } from "../ui/separator";

function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <Separator />
      </div>
      <footer className="mx-auto container py-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="text-blue-500"> Library Management</span> &copy;{" "}
          {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
