<script>
	let dataList = [
		{ id: 1, link: '/c/forms', navtitle: 'Super Forms' },
		{ id: 2, link: '/c/navs', navtitle: 'navbars' },
		{ id: 3, link: '/c/grids', navtitle: 'grids' },
		{ id: 4, link: '/c/hero', navtitle: 'Hero' }
	];
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content ml-2 p-2 prose">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side h-[91vh]">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-60 bg-base-300 text-base-content h-[91vh]">
			{#each dataList as item (item.id)}
				<li><a href={item.link} class="font-bold capitalize"> {item.navtitle}</a></li>
			{/each}
		</ul>
	</div>
</div>
