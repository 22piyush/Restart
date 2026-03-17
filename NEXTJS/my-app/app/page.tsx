import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Welcome to Home Page</div>

      <div>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/services">Services</Link></p>
        <p><Link href="/blogs">Blogs</Link></p>
      </div>
    </div>
  );
}