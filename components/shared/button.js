import Link from "next/link";

export default function Button({
  children,
  type = "button",
  onClick,
  disabled,
  isLoading,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <div className="absolute animate-spin rounded-full border-t-4 border-white h-5 w-5 py-2"></div>
      ) : (
        children
      )}
    </button>
  );
}
