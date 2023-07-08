<script>
	import { LayoutDashboard, LayoutGrid, Moon, PanelLeft, SunMedium } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { fade, scale } from 'svelte/transition';

	onMount(() => {
		themeChange(false);
	});
	let navs = [
		{ name: 'Home', href: '/' },
		{ name: 'Components', href: '/c' }
	];
	let isCheck = false; // for Dark - Light mode
</script>

<div class="navbar bg-base-100 md:px-4">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each navs as nav}
					<li>
						<a href={nav.href}>{nav.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl md:font-bold" href="/">Svelte - Components</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as nav}
				<li>
					<a href={nav.href}>{nav.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end items-center">
		<label for="my-drawer" class="drawer-button mx-3">
			<LayoutGrid size="22" color="#2995fa" />
		</label>
		<div data-set-theme={isCheck ? 'dark' : 'light'} data-act-class="ACTIVECLASS">
			<!-- <a class="btn">Button</a> -->
			<button
				on:click={() => {
					isCheck = !isCheck;
				}}
			>
				{#if isCheck}
					<div in:scale class="mt-1">
						<SunMedium />
					</div>
				{:else}
					<div in:scale class="mt-1">
						<Moon size="22" />
					</div>
				{/if}
			</button>
		</div>
	</div>
</div>

<style>
	button {
		outline: none;
		border: none;
	}
</style>
