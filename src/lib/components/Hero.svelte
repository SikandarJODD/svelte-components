<script>
	import Logo from '$lib/carbon.png';
</script>

<div class="relative isolate overflow-hidden " >
	<div class="mx-auto max-w-7xl px-6 pb-24 md:pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 ">
			<img
				class="h-11 hidden sm:flex"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt="Your Company"
			/>
			<div class="mt-24 sm:mt-32 lg:mt-16">
				<a href="/" class="inline-flex space-x-6">
					<span
						class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
						>What's new</span
					>
					<span
						class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
					>
						<span>Just shipped v1.0</span>
						<svg
							class="h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</a>
			</div>
			<h1 class="mt-10 text-4xl font-bold tracking-tight text-success sm:text-6xl">
				Svelte Components for  Websites
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-500">
				Simple Svelte Components for your website. No need to install any package. Just copy and paste the code.
			</p>
			<div class="mt-10 flex items-center gap-x-6">
				<a
					href="/c"
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Components</a
				>
				<a href="/c/navs" class="text-sm font-semibold leading-6 text-success"
					>Navs <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
		<div
			class="mx-auto mt-16 max-w-2xl md:mt-24 lg:ml-14 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 hidden md:flex"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<div
					class="md:-m-2 rounded-xl bg-[#FFFFFF21] p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4 "
				>
					<img
						src={Logo}
						alt="App screenshot"
						class=" md:w-[64rem] md:h-[36rem] rounded-xl overflow-hidden shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
