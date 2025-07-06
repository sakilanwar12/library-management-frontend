import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
  // Layout route at root "/"
  route("/books", "./routes/books.tsx"),
] satisfies RouteConfig;
