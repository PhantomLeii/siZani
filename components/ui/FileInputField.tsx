"use client";

import { FileInput, Label } from "flowbite-react";

export default function FileInputField({ label }: { label: string }) {
  return (
    <div>
      <div>
        <Label htmlFor="multiple-file-upload" value={label} />
      </div>
      <FileInput id="multiple-file-upload" multiple />
    </div>
  );
}
