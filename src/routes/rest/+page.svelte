<script lang="ts">
	import Animation from '$lib/Animation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="rest" />
<Animation iterations={16} inhale={4} hold1={7} exhale={8} />
