
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! 2</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/services">Services</Link></p>
      <p><Link href="/blogs">Blogs</Link></p>
    </div>
  );
}
