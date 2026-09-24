
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! 2</h1>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
    </div>
  );
}
