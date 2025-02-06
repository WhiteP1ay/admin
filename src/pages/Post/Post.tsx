import List from "./List";
import Upload from "./Upload";
import Search from "./Search";
import { useFetchPostList } from "../../hooks/useFetchPostList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [search, setSearch] = useState("");
  const { data, refetch } = useFetchPostList(search);
  const navigate = useNavigate();

  const onSearch = () => {
    refetch();
  };

  const handleView = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Upload />
        <Search search={search} onChange={setSearch} onSearch={onSearch} />
      </div>
      <List data={data?.data} handleView={handleView} />
    </div>
  );
};

export default Post;
