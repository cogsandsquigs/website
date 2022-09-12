export type Page = {
    // added page props
    render: any; // The render function for the page
    slug: string;
    path: string;
    csr: boolean; // If we do client-side rendering for the page

    // required page props
    title: string;
    description: string;

    // required post + project props, optional page props
    date: Date | undefined;
    tags: string[] | undefined;

    // required project props, optional page props
    repo_link: string | undefined;
};
