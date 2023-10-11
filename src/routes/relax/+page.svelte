<script lang="ts">
	import RoutineAnimation from '$lib/RoutineAnimation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="relax" />
<RoutineAnimation iterations={18} inhale={4} exhale={6} />
