<script lang="ts" context="module">
    export const load = ({ params }) => {
        return {
            status: 404,
            error: new Error(`Not found: /blog/${params.slug}`),
        };
    };
</script>
