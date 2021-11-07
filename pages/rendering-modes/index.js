// Styles
import Link from "next/Link";

export default function Static() {
  return (
    <div>
      <ol>
        <li>
          <Link href="/rendering-modes/static"><a>Static</a></Link>
        </li>
        <li>
          <Link href="/rendering-modes/ssg"><a>SSG</a></Link>
        </li>
        <li>
          <Link href="/rendering-modes/isr"><a>ISR</a></Link>
        </li>
        <li>
          <Link href="/rendering-modes/ssr"><a>SSR</a></Link>
        </li>
      </ol>
    </div>
  );
}
