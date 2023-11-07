<script lang="ts">
	export let href = '/';
	export let copy = 'button';
	export let onClick = () => {};
</script>

<a {href} on:click={onClick}>
	{copy}
</a>

<style>
	a {
		background-color: var(--color-grey-800);
		border-radius: var(--radius-xl);
		color: var(--color-grey-50);
		display: block;
		padding: var(--size-2);
		text-align: center;
		text-decoration: none;
		width: 50%;
	}
</style>
