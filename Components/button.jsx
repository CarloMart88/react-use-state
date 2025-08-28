import React from "react";

function Button({ language, onClick }) {
  const { id, title, description } = language;
  return (
    <div className="col-2 p-2 g-1">
      <button className="btn btn-primary" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
