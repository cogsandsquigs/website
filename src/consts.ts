// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { execSync } from "child_process";

export const SITE_TITLE = "Cogs And Squigs";
export const SITE_DESCRIPTION = "My little slice of the blogosphere";
export const COMMIT_HASH_SHORT = execSync("git rev-parse --short HEAD")
    .toString()
    .trim();
