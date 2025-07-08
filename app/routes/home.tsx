import type { Route } from "./+types/home";
import BookTable from "~/components/features/tables/BookTable";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <BookTable />
    </div>
  );
}
