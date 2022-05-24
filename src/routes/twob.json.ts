import { title, website, description, locale } from "$lib/info";

type Twob = {
    url: string // url to main site of user
    title: string // feed title
    description?: string // feed description
    language?: string // feed language

    follows?: string[] // who the user follows

    content?: {
        body: string // markdown format
        timestamp: string // ISO-8601 format
        tags?: string[] // post tags, each must be only one word, no spaces
    }[]
}

async function data(): Promise<Twob> {
    return {
        url: website,
        title: title,
        description: description,
        language: locale,
        content: [
            {
                body: "hello world!",
                timestamp: new Date(Date.now()).toISOString(),
            }
        ]
    }
}

export const get = async () => {
    let body = await data()

    const headers = {
        "Cache-Control": "max-age=0, s-maxage=3600",
        "Content-Type": "application/json",
    };

    return {
        headers,
        body,
    };
}