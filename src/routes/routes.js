import CreatePost from "pages/CreatePost";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/user-onboard",
    component: NotFound,
  },
  {
    path: "/create-post",
    component: CreatePost,
  },
];

export default routes;
