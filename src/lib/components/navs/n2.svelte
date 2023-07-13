<!-- Navbar 1  -->
<script>
	let navs = [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/products' },
		{ name: 'Blogs', href: '/blogs' },
		{ name: 'About', href: '/about' }
	];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
				{#each navs as item}
					<li><a href={item.href}>{item.name}</a></li>
				{/each}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl font-bold border border-primary" href="/">Coding</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as item}
				<li class="first:font-bold"><a href={item.href}>{item.name}</a></li>
			{/each}
		</ul>
	</div>
	
</div>
