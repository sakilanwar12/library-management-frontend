import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/books/:id", "routes/single-book.tsx"),
    route("/borrow-summery", "routes/borrow-summery.tsx"),
  ]),
] satisfies RouteConfig;
