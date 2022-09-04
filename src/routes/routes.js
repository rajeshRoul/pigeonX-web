import React from "react";
const CreatePost = React.lazy(() => import("pages/CreatePost"));
const FindFriends = React.lazy(() => import("pages/Friends"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const Profile = React.lazy(() => import("pages/Profile"));

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
  {
    path: "/find-friends",
    component: FindFriends,
  },
  {
    path: "/profile/:id",
    component: Profile,
  },
];

export default routes;
