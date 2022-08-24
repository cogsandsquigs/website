import { all } from "$lib/all";

export const tags = async () => {
    return await all().then(([pages]) =>
        [pages]
            .reduce((tags: string[], page) => {
                page.tags.forEach((tag: string) => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                });

                return tags;
            }, [])
            .sort()
    );
};
