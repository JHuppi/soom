<script>
	import { fade } from 'svelte/transition';

	import ButtonLink from '../ButtonLink.svelte';
</script>

<div in:fade out:fade={{ duration: 200 }}>
	<ButtonLink href="/raise" copy=raise />
	<ButtonLink href="/recharge" copy="recharge" />
	<ButtonLink href="/relax" copy="relax" />
	<ButtonLink href="/rest" copy="rest" />
</div>

<style>
	div {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		padding: var(--size-2);
	}
</style>
