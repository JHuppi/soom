<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="raise" />
<RoutineAnimation iterations={15} inhale={6} exhale={2} />
