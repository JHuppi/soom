<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
	import RoutineWrapper from '$lib/RoutineWrapper.svelte';
</script>

<RoutineWrapper>
	<RoutineHeader copy="raise" />
	<RoutineAnimation iterations={15} inhale={6} exhale={2} />
</RoutineWrapper>
