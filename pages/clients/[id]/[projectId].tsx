import { useRouter } from "next/router"

export default function SelectedClientPageSelectedProject() {

    const { query: { projectId, id } } = useRouter();

    return <h1>Selected Project {projectId} for selected client {id}</h1>
}