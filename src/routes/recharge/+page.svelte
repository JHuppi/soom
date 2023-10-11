<script lang="ts">
	import Animation from '$lib/Animation.svelte';
	import RoutineHeader from '$lib/RoutineHeader.svelte';
</script>

<RoutineHeader copy="recharge" />
<Animation iterations={12} inhale={4} hold1={4} exhale={4} hold2={4} />
