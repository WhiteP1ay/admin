import Button from "../../components/Button";
import { useAddComment } from "../../hooks/useAddComment";
import { useFetchComment } from "../../hooks/useFetchComment";
import { useDeleteComment } from "../../hooks/useDeleteComment";
import { formatTime } from "../../utils/formatTime";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();

  const { handleContentChange, handleNicknameChange, handleAddComment, data } =
    useAddComment(Number(postId));
  const { data: commentData } = useFetchComment(Number(postId));
  const { handleDeleteComment } = useDeleteComment(Number(postId));

  return (
    <>
      <div className="flex flex-col gap-2 w-[800px]">
        {commentData?.data.map((comment) => (
          <div
            className="flex justify-between gap-2 p-2 border border-gray-300 rounded-md"
            key={comment.id}
          >
            <div>
              <div className="text-sm text-gray-500">
                {comment.nickname} 发表于 {formatTime(comment.created_at)}
              </div>
              <div className="mt-1">{comment.content}</div>
            </div>

            <Button type="red" onClick={() => handleDeleteComment(comment.id)}>
              删除
            </Button>
          </div>
        ))}
      </div>
      <form className="flex flex-col gap-2 w-[800px] items-end">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          value={data.nickname}
          onChange={handleNicknameChange}
          required
          placeholder="昵称"
        />
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="评论功能仅墙外可见"
          value={data.content}
          onChange={handleContentChange}
          required
        ></textarea>

        <Button
          onClick={(e) => {
            e.preventDefault();
            if (data.nickname === "" || data.content === "") {
              return;
            }
            handleAddComment();
          }}
        >
          提交
        </Button>
      </form>
    </>
  );
};

export default Comments;
