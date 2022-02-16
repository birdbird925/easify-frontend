export default function Loading({ full }) {
  if (full) {
    return (
      <div className="fixed top-0 left-0 h-full w-full z-50 bg-dark-800 bg-opacity-60 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full border-t-4 border-primary h-16 w-16"></div>
        <div className="pt-5 text-white font-medium text-xl">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="p-10 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full border-t-4 border-primary h-16 w-16"></div>
        <div className="pt-5 font-medium text-xl">Loading...</div>
      </div>
    );
  }
}
