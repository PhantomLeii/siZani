import { FaceFrownIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <FaceFrownIcon className="w-12 h-12 text-gray-500" />
      <h1 className="text-2xl font-bold text-gray-500">Note not found</h1>
    </div>
  );
}
