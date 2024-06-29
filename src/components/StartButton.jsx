import { Link } from "react-router-dom";

const StartButton = ({ url }) => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center w-full h-full ">
      <Link to={url}>
        <span className="w-auto h-12 px-8 py-4 rounded-lg bg-rose-600 hover:bg-rose-700 text-white">
          Start
        </span>
      </Link>
    </div>
  );
};

export default StartButton;
