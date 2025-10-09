import { Link } from "react-router";
import AppError from "../../../public/App-Error.png";

export default function ErrorApp() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center mx-auto">
      <div className="w-1/2 lg:w-1/5">
        <img src={AppError} alt="No App Found" className=" mb-6" />
      </div>
      <h2 className="text-5xl font-bold text-[#001931] mb-2 mt-4">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-xl text-[#627382] mb-4">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white">
        Go Back!
      </Link>
    </div>
  );
}
