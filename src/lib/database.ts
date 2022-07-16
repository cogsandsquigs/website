import { PrismaClient, type Post, type User } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class DB {
    client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    /**
     * GetViews returns the number of views a post has.
     * If the post does not exist, it creates a new post object, and returns 0.
     * @param slug The slug of the post.
     * @returns {Promise<number>} The number of views the post has.
     */
    public async getPostViews(slug: string): Promise<number> {
        try {
            const post = await this.getPost(slug);
            return post.views;
        } catch (e) {
            await this.newPost(slug);
            return 0;
        }
    }

    /**
     * GetLikes returns the number of likes a post has.
     * If the post does not exist, it creates a new post object, and returns 0.
     * @param slug The slug of the post.
     * @returns {Promise<number>} The number of likes the post has.
     */
    public async getPostLikes(slug: string): Promise<number> {
        try {
            const post = await this.getPost(slug);
            return post.likes;
        } catch (e) {
            await this.newPost(slug);
            return 0;
        }
    }

    /**
     * UpdatePostViews updates the number of views a post has.
     * This updates the user's views as well.
     * If the user already visited the post, it does not update the views.
     * If the post does not exist, creates a new post.
     * If the user does not exist, creates a new user.
     * @param slug The slug of the post.
     * @param uuid The uuid of the user.
     */

    public async updatePostViews(slug: string, uuid: string) {
        let post: Post;
        try {
            post = await this.getPost(slug);
        } catch (e) {
            post = await this.newPost(slug);
        }

        let user: User;
        try {
            user = await this.getUser(uuid);
        } catch (e) {
            user = await this.newUser(uuid);
        }

        if (!user.views.includes(slug)) {
            user.views.push(slug);
            await this.updateUser(uuid, { views: user.views });
            await this.updatePost(slug, { views: post.views + 1 });

            return post.views + 1;
        }

        return post.views;
    }
    /**
     * UpdatePostLikes updates the number of likes a post has.
     * If the user already liked the post, it does not update the
     * likes, and removes the post slug from the user's likes.
     * If the post does not exist, creates a new post.
     * If the user does not exist, throws.
     * @param slug The slug of the post.
     * @param uuid The uuid of the user.
     * @param liked Whether the user liked the post or not.
     */
    public async updatePostLikes(slug: string, uuid: string, liked: boolean) {
        let post: Post;
        try {
            post = await this.getPost(slug);
        } catch (e) {
            post = await this.newPost(slug);
        }

        let user = await this.getUser(uuid);

        if (!user.likes.includes(slug)) {
            await this.updateUser(uuid, {
                likes: liked ? [...user.likes, slug] : user.likes,
            });
            await this.updatePost(slug, {
                likes: liked ? post.likes + 1 : post.likes,
            });

            return liked ? post.likes + 1 : post.likes;
        } else {
            await this.updateUser(uuid, {
                likes: liked
                    ? user.likes
                    : user.likes.filter((l) => l !== slug),
            });
            await this.updatePost(slug, {
                likes: liked ? post.likes : post.likes - 1,
            });

            return liked ? post.likes : post.likes - 1;
        }
    }

    /**
     * getUserLikes returns the list of posts the use has liked.
     * Creates a new user if it does not exist.
     * @param uuid The uuid of the user.
     * @returns {Promise<string[]>}
     * @throws {Error} If the user does not exist or is not found
     */
    public async getUserLikes(uuid: string): Promise<string[]> {
        let user: User;
        try {
            user = await this.getUser(uuid);
        } catch (e) {
            user = await this.newUser(uuid);
        }

        return user.likes;
    }

    /**
     * newUser creates a new user object.
     * If no uuid is provided, it generates a new one.
     * @param uuid The uuid of the user.
     * @param user The fields you would like to update.
     * @returns {Promise<User>}
     */
    public async newUser(uuid?: string, user?: any): Promise<User> {
        return this.client.user.create({
            data:
                uuid != null ? { uuid, ...user } : { uuid: uuidv4(), ...user },
        });
    }

    /**
     * getUser returns a user object.
     * @param uuid The uuid of the user.
     * @returns {Promise<User>}
     * @throws {Error} If the user does not exist or is not found
     */
    public async getUser(uuid: string): Promise<User> {
        return this.client.user.findUniqueOrThrow({
            where: {
                uuid,
            },
        });
    }

    /**
     * updateUser updates a user object.
     * @param uuid The uuid of the user.
     * @param user The fields you would like to update.
     * @returns {Promise<User>}
     * @throws {Error} If the user does not exist or is not found
     */
    private async updateUser(uuid: string, user: any): Promise<User> {
        return this.client.user.update({
            where: {
                uuid,
            },
            data: user,
        });
    }

    /**
     * delUser deletes a user object.
     * @param uuid The uuid of the user.
     * @returns {Promise<User>}
     * @throws {Error} If the user does not exist or is not found
     */
    private async delUser(uuid: string): Promise<User> {
        return this.client.user.delete({
            where: {
                uuid,
            },
        });
    }

    /**
     * newPost creates a new post object.
     * @param slug The slug of the post.
     * @param post The fields you would like to create.
     * @returns {Promise<Post>}
     */
    public async newPost(slug: string, post?: any): Promise<Post> {
        return this.client.post.create({
            data: {
                ...post,
                slug: slug,
            },
        });
    }

    /**
     * getPost returns a post object.
     * @param slug The slug of the post.
     * @returns {Promise<Post>}
     * @throws {Error} If the post does not exist or is not found
     */
    public async getPost(slug: string): Promise<Post> {
        return this.client.post.findUniqueOrThrow({
            where: {
                slug,
            },
        });
    }

    /**
     * updatePost updates a post object.
     * @param slug The slug of the post.
     * @param post The fields you would like to update.
     * @returns {Promise<Post>}
     * @throws {Error} If the post does not exist or is not found
     */
    private async updatePost(slug: string, post: any): Promise<Post> {
        return this.client.post.update({
            where: {
                slug,
            },
            data: post,
        });
    }

    /**
     * delPost deletes a post object.
     * @param slug The slug of the post.
     * @returns {Promise<Post>}
     * @throws {Error} If the post does not exist or is not found
     */
    private async delPost(slug: any): Promise<Post> {
        return this.client.post.delete({
            where: {
                slug,
            },
        });
    }
}

export const db = new DB();
