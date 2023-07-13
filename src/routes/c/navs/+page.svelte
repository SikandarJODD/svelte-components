<script>
	// import N3 from '$lib/components/navs/n3.svelte';
	// import N2 from '$lib/components/navs/n2.svelte';
	// import N1 from '$lib/components/navs/n1.svelte';
	import Box from '$lib/components/Box.svelte';
	import { clickToCopyAction } from 'svelte-legos';
	import { confettiAction } from 'svelte-legos';
	import { navbarsList } from '$lib/store';

	let cls = 'badge badge-outline font-bold p-4 text-[17px] hover:bg-base-200 cursor-pointer mx-1';
</script>

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
			<button
				class="btn btn-sm btn-outline"
				use:clickToCopyAction={item.code}
				use:confettiAction={{ type: 'school-pride' }}>Copy</button
			>
		</div>
		<div class="not-prose">
			<Box><svelte:component this={item.component} /></Box>
		</div>
	{/each}
</div>
