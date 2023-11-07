import React from "react";

function Button({ type, title, icon, variant, full }) {
  return (
    <button
      className={`flexCenter gap-2 rounded-full ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <img src={icon} alt="login" width="20" height="20" />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
}

export default Button;
