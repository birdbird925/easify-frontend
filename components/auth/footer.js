import React from "react";
import Link from "next/link";

export default function AuthFooter() {
  return (
    <div className="flex justify-around md:justify-between items-center max-w-sm m-auto py-4 text-sm text-white">
      {/* TODO: add auth footer url */}
      <Link href="/#home">
        <a className="hover:text-primaryHover">Home</a>
      </Link>
      <Link href="/#faq">
        <a className="hover:text-primaryHover">FAQ</a>
      </Link>
      <Link href="/#policy">
        <a className="hover:text-primaryHover">Privacy Policy</a>
      </Link>
      <Link href="/#term">
        <a className="hover:text-primaryHover">Terms</a>
      </Link>
    </div>
  );
}
