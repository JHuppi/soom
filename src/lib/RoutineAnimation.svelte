<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';

	import Circle from './icons/Circle.svelte';
	import Pause from './icons/Pause.svelte';
	import Play from './icons/Play.svelte';

	export let iterations: number;

	export let inhale: number;
	export let hold1: number = 0;
	export let exhale: number;
	export let hold2: number = 0;

	const MILLISECONDS_TO_SECONDS = 1000;

	let animation: Animation;
	let animationDuration: number;
	let animationState: 'running' | 'paused' = 'paused';
	let duration: CSSNumberish = 0;
	let dynamicCircle: Circle;
	let exhaleOffset: number;
	let hold1Offset: number;
	let hold2Offset: number;
	let inhaleOffset: number;
	let minutes: string = '00';
	let seconds: string = '00';
	let stateIcon: ComponentType;
	let wakeLock: WakeLockSentinel | null = null;

	$: {
		animationDuration = inhale + hold1 + exhale + hold2;
		exhaleOffset = (inhale + hold1 + exhale) / animationDuration;
		hold1Offset = (inhale + hold1) / animationDuration;
		hold2Offset = (inhale + hold1 + exhale + hold2) / animationDuration;
		inhaleOffset = inhale / animationDuration;
		minutes = Math.floor(+duration / 60)
			.toString()
			.padStart(2, '0');
		seconds = (+duration % 60).toString().padStart(2, '0');
		stateIcon = animationState === 'running' ? Pause : Play;
	}

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
					offset: inhaleOffset
				},
				{
					strokeDashoffset: 0,
					offset: hold1Offset
				},
				{
					strokeDasharray: circleLength,
					strokeDashoffset: circleLength,
					offset: exhaleOffset
				},
				{
					strokeDasharray: circleLength,
					strokeDashoffset: circleLength,
					offset: hold2Offset
				}
			],
			{
				duration: animationDuration * MILLISECONDS_TO_SECONDS,
				iterations
			}
		);

		animation = new Animation(effect);

		const animationIntervalID = setInterval(() => {
			const timing = animation.effect ? animation.effect.getComputedTiming() : {};
			if (animation.playState === 'finished') {
				duration = +(timing.endTime ?? 0) / 1000;
			} else {
				duration = Math.ceil((+(timing.endTime ?? 0) - +(timing.localTime ?? 0)) / 1000);
			}
		}, 100);

		animation.onfinish = () => {
			animationState = 'paused';
			wakeLock?.release();
			wakeLock = null;
		};

		return () => {
			clearInterval(animationIntervalID);
			wakeLock?.release();
			wakeLock = null;
		};
	});

	const requestWakeLock = async () => {
		if (!('wakeLock' in navigator)) {
			return;
		}

		wakeLock = await navigator.wakeLock.request('screen');
	};

	const togglePlayState = () => {
		if (animation.playState === 'running') {
			animation.pause();
			animationState = 'paused';
			wakeLock?.release();
			wakeLock = null;
		} else {
			animation.play();
			animationState = 'running';
			requestWakeLock();
		}
	};
</script>

<div>
	<h2>{minutes}:{seconds}</h2>
	<button on:click={() => togglePlayState()}>
		<Circle class="icon static" />
		<Circle bind:this={dynamicCircle} class="icon dynamic" />
		<svelte:component this={stateIcon} class="icon play-state" />
	</button>
</div>

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
		display: block;
		color: var(--color-grey-700);
		cursor: pointer;
		margin: 0 auto;
		padding: 0;
		position: relative;
		width: var(--size-64);
	}

	h2 {
		font-size: var(--scale-6);
		margin: 0 auto;
		text-align: center;
	}
</style>
