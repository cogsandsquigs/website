<script lang="ts">
    import { locale, dateOptions} from "$lib/info"
    export let post;
</script>

<h2><a href="/blog/{post.metadata.slug}">{post.metadata.title}</a></h2>
<h4>Published on {new Date(post.metadata.date).toLocaleDateString(locale, dateOptions)}</h4>

{#if post.metadata.tags != undefined}
<h5>Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a href={"/blog/tags/" + tag}>{tag}</a>{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}</h5>
{/if}