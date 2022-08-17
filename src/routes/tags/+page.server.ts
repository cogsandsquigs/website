import { tags as ts } from "$lib/tags";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        tags: await ts(),
    };
};
