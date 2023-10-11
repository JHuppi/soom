<script lang="ts">
	import Animation from '$lib/Animation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="raise" />
<Animation iterations={15} inhale={6} exhale={2} />
