
import React from "react";


function Header({ title, count }) {
  const headerStyle = {
    color: count > 5 ? "red" : "black",
  };

  return (
    <h2 className="text-center fw-bold" style={headerStyle}>
      {title}
    </h2>
  );
}

export default Header;