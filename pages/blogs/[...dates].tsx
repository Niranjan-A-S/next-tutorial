import { useRouter } from "next/router";
import { useMemo } from "react";

export default function BlogsPage() {

    const { query: { dates } } = useRouter();
    const [year, month, day] = useMemo(() => dates as string[], [dates]);

    return (
        <div>
            <h1>Blog of {day}/{month}/{year}</h1>
        </div>
    )
}