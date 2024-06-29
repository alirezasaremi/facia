import { LoaderCircle } from "lucide-react";

const Loading = ({ statusText = "Loading ..." }) => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center w-full h-full ">
      <LoaderCircle color="#808" className="animate-spin" size={48} />
      <p className="text-slate-300 text-sm">{statusText}</p>
    </div>
  );
};

export default Loading;
