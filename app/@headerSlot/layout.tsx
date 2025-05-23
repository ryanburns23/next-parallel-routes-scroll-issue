import React from "react";

function HeaderSlot({ children }: { children: React.ReactNode }) {
  return <h1 className="font-bold">Header Slot - {children}</h1>;
}

export default HeaderSlot;
