import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="py-54 bg-yellow-500 flex items-center justify-center">
        Page 1
      </div>

      <div className="py-16 px-12">
        <h1>Page 1 content - Scroll and click a link</h1>
        <div className="flex flex-col">
          <Link href="/page2">Go to Page 2</Link>
          <Link href="/page3">Go to Page 3</Link>
        </div>

        <div className="flex flex-col mt-[100vh]">
          <Link href="/page2">Go to Page 2</Link>
          <Link href="/page3">Go to Page 3</Link>
        </div>
      </div>
    </div>
  );
}
