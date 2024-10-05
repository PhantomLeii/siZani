"use client";

import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="container py-6 h-full w-full flex justify-center items-center">
      <SignIn />
    </div>
  );
}
