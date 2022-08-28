import { tags } from "./tags";
import type { PageLoad } from "./$types";

export const prerender = true;
export const hydrate = false;

export const load: PageLoad = async () => {
    return {
        tags: await tags(),
    };
};
