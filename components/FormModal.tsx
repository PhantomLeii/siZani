"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import FileInputField from "./ui/FileInputField";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

export default function FormModal({ btnText }: { btnText: string }) {
  const [openModal, setOpenModal] = useState(false);
  const issueTitleRef = useRef<HTMLInputElement>(null);
  const issueDescRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const createIssue = useMutation(api.issues.createIssue);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  async function handleSendImage(event: React.FormEvent) {
    event.preventDefault();

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "image/*" },
      body: selectedImage,
    });
    const { storageId } = await result.json();
  }

  function handleSubmit() {
    console.log({
      title: issueTitleRef.current?.value as string,
      description: issueDescRef.current?.value as string,
      imageUrl: "",
    });
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{btnText}</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={issueTitleRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create a new issue
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="What are you reporting?" />
              </div>
              <TextInput
                id="email"
                ref={issueTitleRef}
                placeholder="There is..."
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Description" />
              </div>
              <TextInput
                id="email"
                ref={issueDescRef}
                placeholder="describe the issue..."
                required
              />
            </div>

            <div>
              <FileInputField label="Add photo" />
            </div>

            <Button
              color="dark"
              onClick={() => {
                handleSubmit;
              }}
              className="w-full"
            >
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
