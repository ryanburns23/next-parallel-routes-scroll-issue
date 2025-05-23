import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="py-54 bg-purple-500 flex items-center justify-center">
        Hero - Page 3
      </div>
      {children}
    </>
  );
}

export default layout;
