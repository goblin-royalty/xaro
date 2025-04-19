import App from "../../App";

export function generateStaticParams() {
    return [{ slug: [''] }]
}

export default async function Page() {
    return <App />
}