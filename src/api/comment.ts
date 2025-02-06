import type { DetailRes, ListRes } from "./base.types";

export type Comment = {
  id: number;
  post_id: number;
  content: string;
  nickname?: string;
  created_at: Date;
};

export type AddCommentData = Pick<Comment, "content" | "nickname" | "post_id">;

export const fetchCommentList = async (postId: number) => {
  const res = await fetch(`/api/comment?postId=${postId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch comment list");
  }
  return res.json() as Promise<ListRes<Comment>>;
};

export const addComment = async (data: AddCommentData) => {
  const res = await fetch(`/api/comment`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to add comment");
  }
  return res.json() as Promise<DetailRes<Comment>>;
};

export const deleteComment = async (commentId: number) => {
  const res = await fetch(`/api/comment/${commentId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }
  return res.json() as Promise<DetailRes<Comment>>;
};
