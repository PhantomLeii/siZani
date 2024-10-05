"use client";

import { FileInput, Label } from "flowbite-react";

export default function FileInputField() {
  return (
    <div>
      <div>
        <Label htmlFor="multiple-file-upload" value="Upload an Image" />
      </div>
      <FileInput id="multiple-file-upload" multiple />
    </div>
  );
}
