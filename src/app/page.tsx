"use client";
import ZdogSmiley from "@/components/ZdogSmiley";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-6">
      <h1 className="text-textColor">
        The Tubular Treehouse
      </h1>
      <div className="flex items-center justify-center">
        <ZdogSmiley />
      </div>
    </div>
  );
}
