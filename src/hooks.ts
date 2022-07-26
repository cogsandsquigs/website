/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    const response = await resolve(event, {});

    response.headers.set("Access-Control-Allow-Origin", "*");

    return response;
}