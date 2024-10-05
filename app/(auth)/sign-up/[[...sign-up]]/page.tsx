"use client";

import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="container py-6 h-full w-full flex justify-center items-center">
      <SignUp />
    </div>
  );
}
