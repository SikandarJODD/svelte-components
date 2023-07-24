<script>
	import Box from '$lib/components/Box.svelte';
	import { navbarsList } from '$lib/store';
	import { copy } from 'svelte-copy';

	let cls = 'badge badge-outline font-bold p-4 text-[17px] hover:bg-base-200 cursor-pointer mx-1';
</script>

<!-- <div class="prose  min-w-full"> -->
	<div class="flex items-end">
		<h1 class="m-0 mr-3 p-0">Navbars</h1>
		<div class="not-prose hidden md:flex">
			<div class="{cls} text-primary">Tailwind CSS</div>
			<div class="{cls} text-secondary">Daisy UI</div>
		</div>
	</div>
	<div class=" md:w-[82vw]">
		{#each $navbarsList as item, i}
			<div class="flex items-start mt-3">
				<h3 class="m-0 p-0 mr-2">{i + 1}. {item.title}</h3>
				<button class="btn btn-sm btn-outline capitalize" use:copy={item.code}>Copy</button>
			</div>
			<div class="not-prose">
				<Box><svelte:component this={item.component} /></Box>
			</div>
		{/each}
	</div>
<!-- </div> -->
