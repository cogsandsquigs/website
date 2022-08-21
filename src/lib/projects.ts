import { getPagesFromMd } from "./getPageFromMd";

export const projects = () =>
    getPagesFromMd(
        import.meta.glob<string>(["/src/content/projects/*.md"], { as: "raw" })
    );
