<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content ml-2">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side h-fit">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-56 bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
