import { tags as ts } from "$lib/tags";

export const load = async () => {
    return {
    tags: await ts(),
};
};
