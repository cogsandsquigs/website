/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (param) =>
    /^([0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/.test(
        param
    );
