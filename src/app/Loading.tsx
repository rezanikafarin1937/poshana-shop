import { publicPath } from "@/utils/path";
const Loading = () => {
  return (
    <div className="flex flex-col bg-blue-400">
      <div>در حال بارگذاری ...</div>
      <img src={publicPath("/gif/loading.gif")} alt="" />
    </div>
  );
};

export default Loading;
