export interface Post {
    title: string;
    description: string;
    slug: string;
    date: Date;
    tags: string[];
    recommendations?: Post[];
    likes: number;
    views: number;
}
