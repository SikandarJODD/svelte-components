<script>
	let dataList = [
		{ id: 2, link: '/c/navs', navtitle: 'navbars' },
		{ id: 4, link: '/c/hero', navtitle: 'Hero' },
		{ id: 1, link: '/c/forms', navtitle: 'Super Forms' },
		// { id: 3, link: '/c/grids', navtitle: 'grids' },
	];
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content prose min-w-full p-2">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side h-[88vh]">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul
			class="menu p-4 w-56 bg-base-300 text-base-content h-[80vh] md:border-2 border-slate-800 rounded-lg md:p-2 md:m-3"
		>
			{#each dataList as item (item.id)}
				<li><a href={item.link} class="font-bold capitalize"> {item.navtitle}</a></li>
			{/each}
		</ul>
	</div>
</div>
