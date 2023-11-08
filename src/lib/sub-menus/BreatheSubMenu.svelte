<script>
	import { base } from '$app/paths';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	import ButtonLink from '../ButtonLink.svelte';

	const dispatch = createEventDispatcher();

	const triggerSubMenuClosure = () => {
		dispatch('close');
	};
</script>

<div in:slide={{ duration: 600 }} out:slide={{ duration: 200 }}>
	<ButtonLink href="{base}/raise" copy="raise" onClick={triggerSubMenuClosure} />
	<ButtonLink href="{base}/recharge" copy="recharge" onClick={triggerSubMenuClosure} />
	<ButtonLink href="{base}/relax" copy="relax" onClick={triggerSubMenuClosure} />
	<ButtonLink href="{base}/rest" copy="rest" onClick={triggerSubMenuClosure} />
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
