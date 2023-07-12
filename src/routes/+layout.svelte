<script>
	import SideBar from '$lib/components/SideBar.svelte';
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<SideBar>
	<slot />
</SideBar>

