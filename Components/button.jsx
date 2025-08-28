import React from "react";

function Button({ language, onClick, isActive }) {
  const { id, title, description, type } = language;
  return (
    <div className="col-2 p-2 g-1">
      <button
        className={`btn ${isActive ? "btn-success" : "btn-primary"}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
