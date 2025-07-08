import { Separator } from "../ui/separator";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-card shadow">
      <div className="container mx-auto">
        <Separator />
      </div>
      <footer className="mx-auto container py-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="text-blue-500"> Library Management</span> &copy;{" "}
          {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
