/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({}) {
    let slugs: string[] = [];

    for (let path in import.meta.glob("$posts/*.md")) {
        slugs.push(path.slice(11, path.indexOf(".md")));
    }

    return {
        status: 200,
        body: slugs,
    };
}
