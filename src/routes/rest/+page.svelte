<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
	import RoutineWrapper from '$lib/RoutineWrapper.svelte';
</script>

<RoutineWrapper>
	<RoutineHeader copy="rest" />
	<RoutineAnimation iterations={16} inhale={4} hold1={7} exhale={8} />
</RoutineWrapper>
