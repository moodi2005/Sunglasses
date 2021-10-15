import { Router } from "@vaadin/router";

export const routes = new Router();

routes.setRoutes([
  {
    path: "/",
    name: "home",
    component: "s-home",
    action: async () => {
      await import("../page/home");
    },
  },
  {
    path: "/(.*)",
    name: "profile",
    component: "s-profile",
    action: async () => {
      await import("../page/profile");
    },
  },
]);
