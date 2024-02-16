import React from "react";
import SideNav from "./_components/SideNav";

function layout({ children }) {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="h-full w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
}

export default layout;
