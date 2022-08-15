import { posts } from "$lib/posts";

export const tags = async () => {
    return await posts().then((posts) =>
        posts
            .reduce((tags: string[], post) => {
                post.frontmatter.tags.forEach((tag: string) => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                });

                return tags;
            }, [])
            .sort()
    );
};
