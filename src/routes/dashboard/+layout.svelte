<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { authHandlers, authStore, isLoading } from '$lib/stores';
	import { isLeftBarCollapsed } from '../../lib/stores';
	import './layoutstyle.scss';
	import { onMount } from 'svelte';

	$: $authStore === null && onMount(() => goto('/login'));
	isLoading.set(false);

	let leftbarcollapsed: boolean;

	$: leftbarcollapsed = $isLeftBarCollapsed ? true : false;
</script>

<div class="grid main">
	<aside
		class="leftbar {leftbarcollapsed
			? 'collapsed'
			: ''} flex flex-col h-screen px-4 py-8 overflow-y-auto bg-white border-r"
	>
		{#if leftbarcollapsed}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="w-full flex justify-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
				on:click={() => isLeftBarCollapsed.set(!leftbarcollapsed)}
			>
				<svg
					class=""
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#000000"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
				</svg>
			</div>
		{/if}
		<div class="logo mx-auto flex items-center w-full justify-center gap-x-4">
			<img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
			{#if !leftbarcollapsed}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex justify-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
					on:click={() => isLeftBarCollapsed.set(!leftbarcollapsed)}
				>
					<svg
						class=""
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
					</svg>
				</div>
			{/if}
		</div>
		<div class="profile flex flex-col items-center mt-6 -mx-2">
			<img
				class="object-cover w-24 h-24 mx-2 rounded-full"
				src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				alt="avatar"
			/>
			<h4 class="mx-2 mt-2 font-medium text-gray-800">{$authStore?.displayName}</h4>
			<p class="mx-2 mt-1 text-sm font-medium text-gray-600">{$authStore?.email}</p>
		</div>
		<div class="flex flex-col justify-between flex-1 mt-6">
			<nav class="flex flex-col justify-between h-full">
				<div class="flex flex-col gap-2">
					<div class="route {$page.route.id === "/dashboard" && "active"}" on:click={()=>{goto("/dashboard")}} on:keydown={(e)=>{e.key === "Enter" && goto("/dashboard")}}>
						<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
						<span class="mx-4 font-medium">Dashboard</span>
					</div>
					<div class="route {$page.route.id === "/settings" && "active"}" on:click={()=>{goto("/dashboard/settings")}} on:keydown={(e)=>{e.key === "Enter" && goto("/dashboard/settings")}}>
						<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
						<span class="mx-4 font-medium">Settings</span>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<div class="route" on:click={()=>{authHandlers.logout()}} on:keydown={(e)=>{e.key === "Enter" && authHandlers.logout()}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/></svg>
						<span class="mx-4 font-medium">Log out</span>
					</div>
				</div>
			</nav>
		</div>
	</aside>

	<slot />
</div>
