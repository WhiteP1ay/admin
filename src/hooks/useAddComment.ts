import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment, type AddCommentData } from "@api/comment";
import { useState } from "react";

export const useAddComment = (targetId: number, type: "post" | "sentence") => {
  const [data, setData] = useState<AddCommentData>({
    nickname: "",
    content: "",
    targetId,
    type,
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const queryClient = useQueryClient();

  const handleAddComment = async () => {
    await mutateAsync();
    queryClient.invalidateQueries({ queryKey: ["comment", targetId, type] });
    setData((prev) => ({
      ...prev,
      content: "",
      nickname: "",
    }));
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => addComment(data),
  });

  return {
    data,
    mutateAsync,
    isPending,
    handleContentChange,
    handleNicknameChange,
    handleAddComment,
  };
};
