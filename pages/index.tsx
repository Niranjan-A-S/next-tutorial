import Link from "next/link";

export default function HomePage() {
    return <div><ul>
        <li>
            <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
            <Link href="/clients">Clients</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
    </ul></div>
}