import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/_index.tsx"),

  route("servants", "routes/servants.tsx"),
  route("servants/:id", "routes/servants/id.tsx"),

  route("mystic-codes", "routes/mystic-codes.tsx"),

  route("craft-essences", "routes/craft-essences.tsx"),

  route("skills", "routes/skills.tsx"),

  route("noble-phantasms", "routes/noble-phantasms.tsx"),

  route("items", "routes/items.tsx"),

  route("card-details", "routes/card-details.tsx"),
];
