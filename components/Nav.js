import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="grid content-center p-4">
          <Link href="/">Home</Link>
        </div>
        <div className="grid content-center p-4 text-right">
          <h1 className="text-2xl font-bold">Ian Pratt</h1>
          <h3 className="">Just a gay programmer</h3>
        </div>
      </div>
      <hr />
    </nav>
  );
}
