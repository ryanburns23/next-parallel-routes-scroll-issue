import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <div className="py-54 bg-purple-500 flex items-center justify-center">
        Page 3
      </div>
      <div className="py-16 px-12">
        <h1>Page 3 content - Scroll and click a link</h1>
        <div className="flex flex-col">
          <Link href="/">Go to Page 1</Link>
          <Link href="/page2">Go to Page 2</Link>
        </div>

        <div className="flex flex-col mt-[100vh]">
          <Link href="/">Go to Page 1</Link>
          <Link href="/page2">Go to Page 2</Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
