import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/_index.tsx"),
  route("mystic-codes", "routes/mystic-codes.tsx"),
  route("servants", "routes/servants.tsx"),
  route("craft-essences", "routes/craft-essences.tsx"),
];
