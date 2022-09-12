import { projects } from "$lib/projects";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    return {
        projects: await projects(),
    };
};
