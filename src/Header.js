import React from "react";

function Header() {
  return (
    <div>
      <h1>This is my header</h1>

      {/* Left Header */}
      <div className="header__left">
        <img src="" alt="" />
      </div>

      {/* Search Header */}
      <div className="header__search">
        {/* SearchIcon */}
        <input type="text" />
      </div>

      {/* Right Header */}
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
