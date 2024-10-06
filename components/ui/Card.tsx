import React from "react";
import Image from "next/image";

export default function Card({
  title,
  desc,
  imageUrl,
  ticketNumber,
}: {
  title: string;
  desc: string;
  imageUrl: string;
  ticketNumber?: string;
}) {
  return (
    <div className="w-full p-6 rounded-md flex flex-col justify-start items-start bg-gray-800">
      <div className="flex flex-col gap-2 w-full justify-center items-center md:flex-row md:justify-between">
        <h1 className="text-3xl font-extrabold text-white">{title}</h1>
        <Image
          src={imageUrl}
          alt="issue image"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>

      <div className="w-full mt-4 text-neutral-300 tracking-wide">
        <p>{desc}</p>
      </div>
      <p className="text-lg text-gray-400">{ticketNumber}</p>
    </div>
  );
}
