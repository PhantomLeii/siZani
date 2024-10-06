"use client";

import Card from "@/components/ui/Card";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Spinner } from "flowbite-react";

export default function HomePage() {
  const issues = useQuery(api.issues.listIssues);

  return (
    <div className="container w-full h-full py-6 grid grid-cols-1 lg:grid-cols-4 gap-2">
      <div className="h-full w-full bg-gray-200 p-6 flex flex-col justify-start items-start gap-2">
        <h1 className="text-3xl">Logged Issues</h1>

        <div className="flex flex-col justify-center items-center gap-2">
          {issues === undefined && (
            <div className="h-full w-full grid place-items-center">
              <Spinner size="md" />
            </div>
          )}
          {issues?.map((issue) => (
            <Card
              key={issue.id}
              title={issue.title}
              desc={issue.description}
              imageUrl={issue.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="h-full w-full bg-yellow-400 col-span-3"></div>
    </div>
  );
}
