import React, { forwardRef } from 'react';

const InputBox = forwardRef(({ label = "Label", placeholder, type = "text", className = '', ...props }, ref) => {
  return (
    <div className="w-2/3 flex flex-col">
      <label className="font-outfit text-customDarkgreen">{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`border-black h-14 rounded-l-full rounded-r-full p-3 ${className}`}
        {...props}
      />
    </div>
  );
});
export default InputBox;
