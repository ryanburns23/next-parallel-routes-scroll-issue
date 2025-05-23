import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="py-54 bg-yellow-500 flex items-center justify-center">
        Hero - Page 1
      </div>

      <div className="py-16 px-12">
        <div className="flex flex-col py-12">
          <Link href="/page2">Go to Page 2</Link>
          <Link href="/page3">Go to Page 3</Link>
        </div>
        <div className="mt-[100vh]"></div>
      </div>
    </div>
  );
}
