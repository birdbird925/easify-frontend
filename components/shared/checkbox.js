export default function Checkbox({ checked = false, label, onClick }) {
  return (
    <div className="flex items-center">
      <div
        onClick={onClick}
        className={`${
          checked ? "bg-primary border-primary" : "bg-white border-borderGray"
        } w-6 h-6 rounded-md outline-0 border cursor-pointer`}
      ></div>
      <div onClick={onClick} className="text-sm text-textBlack ml-3 cursor-pointer">
        {label}
      </div>
    </div>
  );
}
