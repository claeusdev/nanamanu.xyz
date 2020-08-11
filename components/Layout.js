import Link from "next/link";
export default function Layout({ children }) {
  return (
    <main className="container">
      <div>
        {children}
        <ul className="links">
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li> */}
          <li>
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>resume</a>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
