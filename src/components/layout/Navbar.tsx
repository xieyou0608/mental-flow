import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <header>
        <h3 className="text-[#463C3C]">Mental Flow</h3>
      </header>
      <div className="flex gap-x-3">
        <button>Setting</button>
        <button>Q&A</button>
        <button>User</button>
      </div>
    </nav>
  );
};

export default Navbar;
