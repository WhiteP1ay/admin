import type { DetailRes, ListRes } from "./base.types";

export type Post = {
  id: number;
  title: string;
  content: string;
};

export const fetchPostList = async (search?: string) => {
  const res = await fetch(`/api/post?search=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post list");
  }
  return res.json() as Promise<ListRes<Post>>;
};

export const fetchPostDetail = async (id: number) => {
  const res = await fetch(`/api/post/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post detail");
  }
  return res.json() as Promise<DetailRes<Post>>;
};
