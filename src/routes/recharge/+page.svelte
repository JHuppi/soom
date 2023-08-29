<script lang="ts">
    import Animation from '$lib/Animation.svelte';
</script>

<h1>recharge</h1>
<Animation iterations={12} inhale={4} hold1={4} exhale={4} hold2={4} />

<style>
    h1 {
        font-size: var(--scale-8);
        color: var(--color-grey-500);
        line-height: 1;
        margin: var(--size-12) auto 0;
        text-align: center;
    }
</style>