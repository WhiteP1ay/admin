import { useQuery } from "@tanstack/react-query";
import { fetchPostCommentList } from "@api/comment";

export const useFetchComment = (targetId: number, type: "post" | "sentence") => {
  const { data } = useQuery({
    queryKey: ["comment", targetId, type],
    queryFn: () => fetchPostCommentList(targetId),
  });

  return { data };
};
