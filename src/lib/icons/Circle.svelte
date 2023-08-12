<script lang="ts">
	// https://heroicons.com
	let className: string;
	let path: SVGGeometryElement;
	let svg: SVGGElement;

	export { className as class };
	export const element = () => ({ svg, path });
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class={className}
	bind:this={svg}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		bind:this={path}
	/>
</svg>
