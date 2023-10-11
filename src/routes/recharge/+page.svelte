<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<div>
    <RoutineHeader copy="recharge" />
    <RoutineAnimation iterations={12} inhale={4} hold1={4} exhale={4} hold2={4} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column-reverse;
    }
</style>