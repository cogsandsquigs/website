import { projects } from "$lib/projects";
import type { PageLoad } from "./$types";

export const prerender = true;
export const hydrate = false;

export const load: PageLoad = async () => {
    return {
        projects: await projects(),
    };
};
