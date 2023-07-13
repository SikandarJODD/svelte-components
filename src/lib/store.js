import { writable } from "svelte/store";
import N1 from "./components/navs/n1.svelte";
import N2 from "./components/navs/n2.svelte";
import N3 from "./components/navs/n3.svelte";

export const isDark = writable(false);
export const navbarsList = writable([
    {
        title: 'Simple Navbars',
        component: N1,
        tags: ["Simple"],
        code: `<!-- Navbar 1  -->
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
                <a class="btn btn-ghost uppercase text-xl font-bold" href="/">Coding</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {#each navs as item}
                        <li><a href={item.href}>{item.name}</a></li>
                    {/each}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn normal-case" href="/">Sign In</a>
            </div>
        </div>
        `
    },
    {
        title: 'Simple Navbars',
        component: N2,
        tags: ["Simple"],
        code: `<!-- Navbar 2  -->
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
        `
    },
    {
        title: 'Navbar',
        component: N3,
        tags: ["Dark Mode"],
        code: `<!-- Navbar 3  -->
        <script>
            import { Moon, SunMedium } from 'lucide-svelte';
            import { onMount } from 'svelte';
            import { themeChange } from 'theme-change';
            import { fade, scale } from 'svelte/transition';
            onMount(() => {
                themeChange(false);
            });
            let navs = [
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'About', href: '/about' }
            ];
            let isDark = false;
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
            <div class="navbar-end">
                <div data-set-theme={isDark ? 'night' : 'cmyk'} data-act-class="ACTIVECLASS">
                    <!-- <a class="btn">Button</a> -->
                    <button
                        on:click={() => {
                            isDark = !isDark;
                        }}
                        class="border-none outline-none"
                    >
                        {#if isDark}
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
        `
    },
])