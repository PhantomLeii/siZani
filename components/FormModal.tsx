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
  const [isLoading, setIsLoading] = useState(false);

  const createIssue = useMutation(api.issues.createIssue);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  async function handleSubmit() {
    setIsLoading(true);

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "image/*" },
      body: selectedImage,
    });

    const { storageId } = await result.json();

    createIssue({
      title: issueTitleRef.current?.value || "",
      description: issueDescRef.current?.value || "",
      imageId: storageId,
    });

    setIsLoading(false);
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
        <form onSubmit={handleSubmit}>
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
                <FileInputField
                  label="Add photo"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSelectedImage(e.target.files ? e.target.files[0] : null)
                  }
                />
              </div>
              <Button
                isProcessing={isLoading}
                disabled={isLoading}
                color="dark"
                type="submit"
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}
