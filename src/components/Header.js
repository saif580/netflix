import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 z-10">
    <div className="absolute inset-0 bg-black opacity-15"></div>
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
    </div>
  );
};

export default Header;
