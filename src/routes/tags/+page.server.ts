import { tags } from "./tags";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        tags: await tags(),
    };
};
