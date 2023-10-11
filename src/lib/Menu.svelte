<script lang="ts">
	import type { ComponentType } from 'svelte';

	import Breathe from './icons/Breathe.svelte';
	import BreatheSubMenu from './sub-menus/BreatheSubMenu.svelte';
	import Clock from './icons/Clock.svelte';
	import Info from './icons/Info.svelte';
	import Nothing from './Nothing.svelte';

	let currentSubMenu: ComponentType = Nothing;

	const handleClick = (_: Event, menuItem: string) => {
		switch (menuItem) {
			case 'settings':
				currentSubMenu = Nothing;
				break;
			case 'breathe':
				currentSubMenu = currentSubMenu === BreatheSubMenu ? Nothing : BreatheSubMenu;
				break;
			case 'reminders':
				currentSubMenu = Nothing;
				break;
		}
	};
</script>

<div id="main-menu">
	<menu>
		<li>
			<button on:click={(e) => handleClick(e, 'settings')}>
				<Info />
				<span>settings</span>
			</button>
		</li>
		<li>
			<button on:click={(e) => handleClick(e, 'breathe')}>
				<Breathe />
				<span>breathe</span>
			</button>
		</li>
		<li>
			<button on:click={(e) => handleClick(e, 'reminders')}>
				<Clock />
				<span>reminders</span>
			</button>
		</li>
	</menu>
	<svelte:component this={currentSubMenu} />
</div>

<style>
	#main-menu {
		background-color: var(--color-grey-50);
		border-top-left-radius: var(--radius-xl);
		border-top-right-radius: var(--radius-xl);
		bottom: 0;
		color: var(--color-grey-500);
		left: 0;
		position: absolute;
		width: 100vw;
		z-index: var(--layer-top);
	}

	menu {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		padding: var(--size-4);
		width: 75%;
	}

	menu > li {
		list-style: none;
	}

	menu > li > button {
		align-items: center;
		background-color: inherit;
		border: none;
		color: var(--color-grey-500);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		font-size: var(--size-2);
	}

	menu > li > button > span {
		-webkit-user-select: none;
		user-select: none;
	}
</style>
