import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const PostDetail = lazy(() => import("../pages/PostDetail/PostDetail"));
const Post = lazy(() => import("../pages/Post/Post"));
const Login = lazy(() => import("../pages/Login/Login"));
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];
