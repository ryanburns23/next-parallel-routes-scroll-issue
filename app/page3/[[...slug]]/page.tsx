import Link from "next/link";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params)?.slug?.[0] || "default";

  return (
    <div className="py-16 px-12">
      <h1>Page 3 content - {slug}</h1>
      <p>Scroll to the bottom and click a link</p>

      <div className="flex flex-col mt-[100vh]">
        <Link href="/page2">Go to Page 2</Link>
      </div>
    </div>
  );
}

export default page;
