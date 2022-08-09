import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/user-onboard",
    component: NotFound,
  },
];

export default routes;
