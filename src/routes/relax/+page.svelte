<script lang="ts">
	import Animation from '$lib/Animation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="relax" />
<Animation iterations={18} inhale={4} exhale={6} />
