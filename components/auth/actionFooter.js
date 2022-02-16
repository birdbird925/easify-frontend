import React from "react";
import Link from "next/link";
import Button from "../shared/button";

export default function AuthActionFooter({
  // children
  children,
  // left link
  link,
  linkLabel,
  // button label
  buttonLabel,
  isButtonLoading,
}) {
  return (
    <>
      <div
        className={`${
          children ? "my-12" : "mt-6 mb-3"
        } flex justify-between items-center`}
      >
        {linkLabel && link ? (
          <Link href={link}>
            <a className="text-sm font-semibold text-textBlack">{linkLabel}</a>
          </Link>
        ) : (
          <></>
        )}

        <Button
          type="submit"
          isLoading={isButtonLoading}
          className="bg-primary hover:bg-primaryHover text-white px-8 py-3 rounded-3xl"
        >
          {buttonLabel}
        </Button>
      </div>

      {children && (
        <>
          <hr className="mb-6 border-borderGray" />
          <div className="text-textBlack text-center font-semibold">
            {children}
          </div>
        </>
      )}
    </>
  );
}
