"use client";

import { FaceFrownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <FaceFrownIcon className="w-12 h-12 text-gray-500" />
      <h1 className="text-2xl font-bold text-gray-500">Note not found</h1>
      <p>
        Perhaps head back to <Link href={"/"}>home</Link>
      </p>
    </div>
  );
}
