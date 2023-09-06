import { useRouter } from "next/router"

export default function SelectedClientPage() {

    const { query: { id } } = useRouter();

    return <h1>Selected Client: {id}</h1>
}