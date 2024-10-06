"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import React from "react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function IssuesPage() {
  const issues = useQuery(api.issues.listIssues);

  return (
    <>
      <div className="container py-6 flex flex-col gap-2 w-full md:justify-between md:flex-row pb-4 border-b-2 border-neutral-400">
        <h1 className="font-bold">Issues</h1>
        <FormModal btnText="New Issue" />
      </div>

      <div className="container w-full py-6 flex flex-col gap-2">
        {issues === undefined && <div className="text-center">Loading...</div>}
        {issues?.map((issue) => (
          // @ts-ignore
          <Card
            key={issue.id}
            title={issue.title}
            desc={issue.description}
            imageUrl={issue.imageUrl}
            ticketNumber={issue.id}
          />
        ))}
      </div>
    </>
  );
}
