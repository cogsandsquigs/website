import { tags } from "./tags";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    return {
        tags: await tags(),
    };
};
