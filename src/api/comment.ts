import { fetchApi } from "@utils/fetchUtils";
import type { DetailRes, ListRes } from "@api/base.types";

export type Comment = {
  id: number;
  postId?: number;
  sentenceId?: number;
  content: string;
  nickname?: string;
  createdAt: Date;
};

export type AddCommentData = {
  content: string;
  nickname?: string;
  targetId: number;
  type: "post" | "sentence";
};

export const fetchPostCommentList = async (targetId: number) => {
  return fetchApi<ListRes<Comment>>(
    `/api/comment?targetId=${targetId}&type=post`
  );
};

export const fetchSentenceCommentList = async (targetId: number) => {
  return fetchApi<ListRes<Comment>>(
    `/api/comment?targetId=${targetId}&type=sentence`
  );
};

export const fetchAllComment = async (type: "post" | "sentence" | "all") => {
  return fetchApi<ListRes<Comment>>(`/api/comment?type=${type}`);
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
