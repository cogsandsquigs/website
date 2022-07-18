import type { Dayjs } from "dayjs";

export interface Post {
    slug: string;
    createdAt: Dayjs;
    title: string;
    description: string;
    content: string;
    tags: string[];
}
