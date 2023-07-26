<script>
	export let href = '/';
	export let copy = 'button';
</script>

<a {href}>
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
