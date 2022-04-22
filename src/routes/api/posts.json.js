import { posts } from "$lib/posts";

export const get = async () => {
  return {
    status: 200,
    body: (await posts()).map((x) => x.metadata),
  };
};
