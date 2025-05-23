import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="py-16 px-12">
      <h1>Page 2 content</h1>
      <p>Scroll to the bottom and click a link</p>

      <div className="flex flex-col mt-[100vh]">
        <Link href="/">Go to Page 1</Link>
        <Link href="/page3">Go to Page 3</Link>
      </div>
    </div>
  );
}

export default page;
