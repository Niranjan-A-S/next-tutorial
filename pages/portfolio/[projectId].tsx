import { useRouter } from "next/router"

export default function ProjectPortfolioPage() {
    const { query: { projectId } } = useRouter();
    return (
        <div>
            <h1>Project Portfolio Page {projectId}</h1>
        </div>
    )
}