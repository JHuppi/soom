<script lang="ts">
	import { onDestroy, onMount, type ComponentType } from 'svelte';

	import Circle from './icons/Circle.svelte';
	import Pause from './icons/Pause.svelte';
	import Play from './icons/Play.svelte';

	let animation: Animation;
	let animationInterval: number;
	let animationState: 'running' | 'paused' = 'paused';
	let duration: CSSNumberish = 0;
	let dynamicCircle: Circle;
	let stateIcon: ComponentType;
	$: stateIcon = animationState === 'running' ? Pause : Play;

	onMount(() => {
		const circleLength = dynamicCircle.element().path.getTotalLength();
		const effect = new KeyframeEffect(
			dynamicCircle.element().svg,
			[
				{
					strokeDasharray: circleLength,
					strokeDashoffset: circleLength
				},
				{
					strokeDashoffset: 0,
					offset: 0.4
				},
				{
					strokeDasharray: circleLength,
					strokeDashoffset: circleLength
				}
			],
			{
				duration: 10 * 1000,
				iterations: 3
			}
		);
		animation = new Animation(effect);
		animationInterval = setInterval(() => {
			const timing = animation.effect ? animation.effect.getComputedTiming() : {};
			duration = timing.endTime ?? 0;
			duration = Math.ceil((+(timing.endTime ?? 0) - +(timing.localTime ?? 0)) / 1000);
		}, 100);
		animation.onfinish = (_) => {
			animationState = 'paused';
			duration = 30;
			clearInterval(animationInterval);
		};
	});

	onDestroy(() => {
		clearInterval(animationInterval);
	})

	const togglePlayState = () => {
		if (animation.playState === 'running') {
			animation.pause();
			animationState = 'paused';
		} else {
			animation.play();
			animationState = 'running';
		}
	};
</script>

{duration}
<button on:click={() => togglePlayState()}>
	<Circle class="icon static" />
	<Circle bind:this={dynamicCircle} class="icon dynamic" />
	<svelte:component this={stateIcon} class="icon play-state" />
</button>

<style>
	:global(.icon) {
		left: 0;
		position: absolute;
		top: 0;
	}

	:global(.dynamic) {
		z-index: var(--layer-1);
	}

	:global(.play-state) {
		z-index: var(--layer-2);
	}

	:global(.static) {
		color: var(--color-grey-300);
	}

	button {
		aspect-ratio: var(--ratio-square);
		background-color: inherit;
		border: none;
		color: var(--color-grey-700);
		cursor: pointer;
		margin: 0 auto;
		padding: 0;
		position: relative;
		width: var(--size-64);
	}
</style>
