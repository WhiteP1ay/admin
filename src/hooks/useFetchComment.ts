import { useQuery } from "@tanstack/react-query";
import { fetchCommentList } from "@api/comment";

export const useFetchComment = (postId: number) => {
  const { data } = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => fetchCommentList(postId),
  });

  return { data };
};
