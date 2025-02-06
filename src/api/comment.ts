import { fetchApi } from "@utils/fetchUtils";
import type { DetailRes, ListRes } from "@api/base.types";

export type Comment = {
  id: number;
  post_id: number;
  content: string;
  nickname?: string;
  created_at: Date;
};

export type AddCommentData = Pick<Comment, "content" | "nickname" | "post_id">;

export const fetchCommentList = async (postId: number) => {
  return fetchApi<ListRes<Comment>>(`/api/comment?postId=${postId}`);
};

export const addComment = async (data: AddCommentData) => {
  return fetchApi<DetailRes<Comment>>(`/api/comment`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deleteComment = async (commentId: number) => {
  return fetchApi<DetailRes<Comment>>(`/api/comment/${commentId}`, {
    method: "DELETE",
  });
};
