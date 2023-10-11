<script lang="ts">
    import Animation from '$lib/Animation.svelte';
</script>

<h1>raise</h1>
<Animation iterations={15} inhale={6} exhale={2} />

<style>
    h1 {
        font-size: var(--scale-8);
        color: var(--color-grey-500);
        line-height: 1;
        margin: var(--size-12) auto 0;
        text-align: center;
    }
</style>