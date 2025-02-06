import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const PostDetail = lazy(() => import("../pages/PostDetail/PostDetail"));
const Post = lazy(() => import("../pages/Post/Post"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Post />,
      },
      {
        path: "/:postId",
        element: <PostDetail />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];
