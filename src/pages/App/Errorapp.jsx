import AppError from "../../../public/App-Error.png";

export default function ErrorApp() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center max-w-5/12 mx-auto">
      <img
        src={AppError}
        alt="No App Found"
        className="w-[100%] h-[100%] mb-6"
      />
      <h2 className="text-2xl font-semibold text-red-500">🚫 No Apps Found</h2>
      <p className="text-gray-500 mt-2">
        Try searching something else or check back later.
      </p>
    </div>
  );
}
