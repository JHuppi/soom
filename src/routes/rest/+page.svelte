<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
    // TODO: turn wrapper into a component with a slot
</script>

<div>
    <RoutineHeader copy="rest" />
    <RoutineAnimation iterations={16} inhale={4} hold1={7} exhale={8} />
</div>

<style>
	div {
        display: flex;
        flex-direction: column-reverse;
    }
</style>