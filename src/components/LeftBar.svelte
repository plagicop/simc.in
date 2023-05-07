<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { authHandlers, authStore, isLeftBarCollapsed } from "$lib/stores";
</script>
<aside
	class="leftbar {$isLeftBarCollapsed
		? 'collapsed'
		: ''} flex flex-col h-screen px-4 py-8 overflow-y-auto bg-white border-r shadow-xl"
>
	{#if $isLeftBarCollapsed}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-full flex justify-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
			on:click={() => isLeftBarCollapsed.set(!$isLeftBarCollapsed)}
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
		<!-- <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> -->
		{#if !$isLeftBarCollapsed}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="flex justify-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
				on:click={() => isLeftBarCollapsed.set(!$isLeftBarCollapsed)}
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
	<div class="flex flex-col justify-between flex-1 mt-6">
		<nav class="flex flex-col justify-between h-full">
			<div class="flex flex-col gap-2">
				<div
					class="route {$page.route.id === '/dashboard' && 'active'}"
					on:click={() => {
						goto('/dashboard');
					}}
					on:keydown={(e) => {
						e.key === 'Enter' && goto('/dashboard');
					}}
				>
					<svg
						class="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
							points="9 22 9 12 15 12 15 22"
						/></svg
					>
					<span class="mx-4 font-medium">Dashboard</span>
				</div>
				<div
					class="route {$page.route.id === '/dashboard/multicheck' && 'active'}"
					on:click={() => {
						goto('/dashboard/multicheck');
					}}
					on:keydown={(e) => {
						e.key === 'Enter' && goto('/dashboard/settings');
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
							d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
						/></svg
					>
					<span class="mx-4 font-medium capitalize">multi check</span>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div
					class="route"
					on:click={() => {
						authHandlers.logout();
					}}
					on:keydown={(e) => {
						e.key === 'Enter' && authHandlers.logout();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" /></svg
					>
					<span class="mx-4 font-medium">Log out</span>
				</div>
			</div>
		</nav>
	</div>
</aside>

<style lang="scss">
    .leftbar {
		@apply w-64 transition-all duration-300 ease-in-out;

		&.collapsed {
			@apply w-16 px-3;

			.logo {
				@apply hidden;
			}

			.profile {
				img {
					@apply w-8 h-8 transition-all duration-300 ease-in-out;
				}

				h4,
				p {
					@apply hidden transition-all duration-300 ease-in-out;
				}
			}

			nav {
				.route {
					@apply px-1 justify-center;

					span {
						@apply hidden transition-all duration-300 ease-in-out;
					}
				}
			}
		}

		.route {
			@apply flex items-center px-4 py-2 mt-4 text-gray-600 transition-all duration-300 transform rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700;

			&.active {
				@apply text-gray-700 bg-gray-100;
			}
		}
	}
</style>