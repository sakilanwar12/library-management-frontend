import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Toaster } from "~/components/ui/sonner";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <Outlet />
      </div>
      <Footer />
        <Toaster />
    </div>
  );
}
