import { useRouter } from "next/router";
import { useCallback } from "react";

export default function ClientPortfolioPage() {

    const { push } = useRouter();

    const loadProjectsHandler = useCallback(() => {
        //load projects
        push({ pathname: 'clients/[id]/[projectId]', query: { id: 'Max', projectId: '100' } })
    }, [push])

    return (
        <div>
            <h1>This is Client Page</h1>
            <button onClick={loadProjectsHandler}>Load Projects</button>
        </div>
    );
}
