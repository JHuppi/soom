<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<div>
	<RoutineHeader copy="relax" />
	<RoutineAnimation iterations={18} inhale={4} exhale={6} />
</div>

<style>
	div {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
