import { useState } from "react";

export default function Input({
  type = "text",
  name,
  label,
  placeholder,
  value,
  id,
  required,
  disabled,
  autoComplete = "",
  err_msg,
  // event
  onChange,
  onFocus,
  onBlur,
  // styling
  wrapperClass,
  inputClass,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const focus = () => {
    setFocused(true);
    onFocus;
  };

  const blur = () => {
    setFocused(false);
    onBlur;
  };

  return (
    <>
      <div
        className={`${wrapperClass} ${
          err_msg
            ? "border-error"
            : focused
            ? "border-primary"
            : "border-borderGray"
        } relative border rounded-md w-full mb-3`}
      >
        <label
          htmlFor={id}
          className={`${
            err_msg ? "text-error" : focused ? "text-primary" : "text-gray"
          } absolute top-3 left-3 text-sm`}
        >
          {label}
        </label>
        <input
          className={`${inputClass} px-3 pt-8 pb-3 block w-full text-textBlack rounded-md outline-0`}
          id={id}
          type={type}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          onFocus={focus}
          onBlur={blur}
          {...props}
        />
        {value && !disabled && (
          <button
            name={name}
            type="button"
            onClick={onChange}
            className="absolute right-3 top-6 w-8 h-8 rounded-md hover:shadow bg-white p-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.384469 0.615532C0.756221 0.244753 1.35816 0.245543 1.72894 0.617294L13.0975 12.0157C13.4682 12.3874 13.4675 12.9894 13.0957 13.3601C12.724 13.7309 12.122 13.7301 11.7512 13.3584L0.382707 1.96C0.0119296 1.58825 0.0127181 0.98631 0.384469 0.615532Z"
                fill={focused ? "#282828" : "#DDDDDD"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.351763 13.3518C-0.0195012 12.9805 -0.0195012 12.3786 0.351764 12.0073L11.7352 0.623842C12.1065 0.252578 12.7084 0.252577 13.0797 0.623841C13.451 0.995107 13.4509 1.59705 13.0797 1.96831L1.69623 13.3518C1.32497 13.723 0.723028 13.723 0.351763 13.3518Z"
                fill={focused ? "#282828" : "#DDDDDD"}
              />
            </svg>
          </button>
        )}
        {/* show error message */}
        {err_msg && <div className="text-error text-sm mb-3">{err_msg}</div>}
      </div>
    </>
  );
}
