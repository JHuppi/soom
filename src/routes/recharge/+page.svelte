<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
	import RoutineWrapper from '$lib/RoutineWrapper.svelte';
</script>

<RoutineWrapper>
	<RoutineHeader copy="recharge" />
	<RoutineAnimation iterations={12} inhale={4} hold1={4} exhale={4} hold2={4} />
</RoutineWrapper>
