import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAllComment, deleteComment } from "@api/comment";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { message } from "antd";

export const useCommentManagement = () => {
  const [filterType, setFilterType] = useState<"all" | "post" | "sentence">(
    "all"
  );
  const queryClient = useQueryClient();

  // 获取所有评论
  const { data } = useQuery({
    queryKey: ["comments", filterType],
    queryFn: () => fetchAllComment(filterType),
  });

  // 删除评论
  const { mutateAsync } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      message.success("删除成功");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  // 处理筛选
  const handleFilterChange = (e: RadioChangeEvent) => {
    setFilterType(e.target.value);
  };

  // 处理删除
  const handleDelete = async (id: number) => {
    await mutateAsync(id);
  };

  // 根据筛选类型过滤数据
  const filteredData = data?.data?.filter((comment) => {
    if (filterType === "all") return true;
    if (filterType === "post") return comment.postId !== undefined;
    if (filterType === "sentence") return comment.sentenceId !== undefined;
    return true;
  });

  return {
    filterType,
    handleFilterChange,
    handleDelete,
    filteredData,
  };
};
