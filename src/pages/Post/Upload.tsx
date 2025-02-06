import Button from "../../components/Button";
import { useUploadPost } from "../../hooks/useUploadPost";

const Upload = () => {
  const { files, setFiles, handleUpload } = useUploadPost();

  return (
    <form className="flex flex-col items-center gap-4 p-6">
      <span className="text-sm text-gray-500">{files.length} 个文件</span>
      <label>
        <span className="mt-2 text-sm text-gray-500 cursor-pointer">
          选择文件
        </span>
        <input
          className="hidden"
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          type="file"
          multiple
        />
      </label>
      <Button
        onClick={() => {
          if (files.length === 0) {
            return;
          }
          handleUpload();
        }}
      >
        上传文件
      </Button>
    </form>
  );
};

export default Upload;
