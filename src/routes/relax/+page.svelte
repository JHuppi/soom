<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
	import RoutineWrapper from '$lib/RoutineWrapper.svelte';
</script>

<RoutineWrapper>
	<RoutineHeader copy="relax" />
	<RoutineAnimation iterations={18} inhale={4} exhale={6} />
</RoutineWrapper>
