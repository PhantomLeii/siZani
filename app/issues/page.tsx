"use client";

import FormModal from "@/components/FormModal";
import Button from "@/components/ui/Button";
import React from "react";

export default function IssuesPage() {
  return (
    <>
      <div className="container py-6 flex flex-col gap-2 w-full md:justify-between md:flex-row pb-4 border-b-2 border-neutral-400">
        <h1 className="font-bold">Issues</h1>
        <FormModal btnText="New Issue" />
      </div>

      <div className="container w-full">{/* Add list of issues */}</div>
    </>
  );
}
