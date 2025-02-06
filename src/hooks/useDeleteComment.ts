import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@api/comment";

export const useDeleteComment = (postId: number) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
  });

  const queryClient = useQueryClient();

  const handleDeleteComment = async (commentId: number) => {
    await mutateAsync(commentId);
    queryClient.invalidateQueries({ queryKey: ["comment", postId] });
  };

  return { mutateAsync, isPending, handleDeleteComment };
};
