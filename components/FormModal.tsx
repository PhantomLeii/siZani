"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import FileInputField from "./ui/FileInputField";

export default function FormModal({ btnText }: { btnText: string }) {
  const [openModal, setOpenModal] = useState(false);
  const issueRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{btnText}</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={issueRef}
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
                ref={issueRef}
                placeholder="There is..."
                required
              />
            </div>
            <div>
              <div className="mb-2 block"></div>
              <FileInputField />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
