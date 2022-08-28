import { all } from "$lib/all";
import type { PageLoad } from "./$types";

export const prerender = true;
export const hydrate = false;

export const load: PageLoad = async () => {
    return {
        latest: await all().then((items) => items.splice(0, 5)),
    };
};
