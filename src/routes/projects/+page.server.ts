import { projects } from "$lib/projects";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        projects: await projects(),
    };
};
