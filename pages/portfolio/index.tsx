import Link from "next/link";
import { memo } from "react"

const PortfolioPage = () => {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <ul>
                <li>
                    <Link replace href="portfolio/1" >Portfolio 1</Link>
                </li>
                <li>
                    <Link href="portfolio/2" >Portfolio 2</Link>
                </li>
                <li>
                    <Link href={{ pathname: '/portfolio/[projectId]', query: { projectId: 3 } }} >Portfolio 3</Link>
                </li>
            </ul>
        </div >
    )
}

export default memo(PortfolioPage);