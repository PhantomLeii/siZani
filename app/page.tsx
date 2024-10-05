"use client";

import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="container py-6 h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl lg:text-5xl font-bold w-full text-start md:text-center">
        Welcome to SiZani!
      </h1>

      <div className="mt-4 flex flex-col md:flex-row md:gap-4 justify-center items-center gap-2 w-full">
        <Button
          as="a"
          onClick={() => {}}
          href="/sign-in"
          className="w-full md:w-auto"
        >
          Sign in
        </Button>
        <Button
          as="a"
          color="dark"
          onClick={() => {}}
          href="/sign-up"
          className="w-full md:w-auto"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
