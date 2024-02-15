import React from "react";
import SideNav from "./_components/SideNav";

function layout({ children }) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      {children}
    </div>
  );
}

export default layout;
