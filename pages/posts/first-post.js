import Link from "next/link";
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      {/* sebelum menggunakan tag Link */}
      <h1 className="title">
        Learn <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {/* setelah menggunakan tag Link */}
      <h1 className="title">
        Read <Link href="/">this page!</Link>
      </h1>
    </>
  );
}
