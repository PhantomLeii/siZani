"use client";

import { FileInput, Label } from "flowbite-react";

export default function FileInputField({
  label,
  onChange,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <div>
        <Label htmlFor="multiple-file-upload" value={label} />
      </div>
      <FileInput id="multiple-file-upload" onChange={onChange} />
    </div>
  );
}
