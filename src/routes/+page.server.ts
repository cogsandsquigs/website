import { all } from "$lib/all";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        latest: await all().then((items) => items.splice(0, 5)),
    };
};
