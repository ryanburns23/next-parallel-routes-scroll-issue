import React from "react";

async function Page({ params }: { params: Promise<{ catchAll: string[] }> }) {
  const page = (await params)?.catchAll?.[0] || "default";
  let label = "default";
  if (page === "page2") {
    label = "Page 2";
  } else if (page === "page3") {
    label = "Page 3";
  }
  return label;
}

export default Page;
