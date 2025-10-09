import { Link } from "react-router";
import AppError from "../../../public/App-Error.png";

export default function ErrorApp() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center max-w-5/12 mx-auto">
      <img
        src={AppError}
        alt="No App Found"
        className="w-[100%] h-[100%] mb-6"
      />
      <h2 className="text-5xl font-bold">OPPS!! APP NOT FOUND</h2>
      <p className="text-gray-500 mt-2">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white">
        Go Back!
      </Link>
    </div>
  );
}
