<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { authHandlers, authStore, isLeftBarCollapsed } from '$lib/stores';
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
		<svg viewBox="0 0 230 75.7478630716747" class="w-auto h-8">
			<g
				transform="matrix(1.4737777924366642,0,0,1.4737777924366642,0,-0.023747396069536093)"
				fill="#00204a"
			>
				<g
					xmlns="http://www.w3.org/2000/svg"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
				>
					<g transform="translate(-7003.000000, -645.000000)" fill="#00204a">
						<g transform="translate(7003.000000, 645.016143)">
							<path
								d="M28.7584121,14.4238569 L20.7084121,14.4238569 C20.6084121,12.6538569 20.0084121,11.1238569 18.7284121,9.91385692 C16.3584121,7.66385692 12.7984121,7.56385692 10.2884121,9.64385692 C7.82841213,11.6938569 7.29841213,15.2338569 9.27841213,17.9738569 C10.2584121,19.3338569 11.4984121,20.6138569 12.8884121,21.5438569 C15.6884121,23.4338569 18.6884121,25.0138569 21.5584121,26.8238569 C23.7384121,28.1938569 25.9184121,29.6138569 27.9484121,31.2038569 C29.4884121,32.4238569 30.4984121,34.0838569 30.4384121,36.1938569 C30.3784121,38.3838569 28.6184121,40.0838569 26.3584121,40.1040257 C24.1084121,40.1238569 22.2284121,38.3638569 22.1684121,36.1838569 C22.1484121,35.4238569 22.1684121,34.6538569 22.1684121,33.8038569 C20.6984121,33.8038569 19.3084121,33.8038569 17.9084121,33.8038569 C17.6484121,33.8038569 17.3584121,33.7638569 17.1384121,33.6338569 C15.2884121,32.5538569 13.4484121,31.4438569 11.5984121,30.3638569 C8.57841213,28.6138569 5.71841213,26.6738569 3.46841213,23.9538569 C-3.25158787,15.8538569 0.228412125,3.73385692 10.1584121,0.683856915 C19.0184121,-2.03614308 28.1784121,4.25385692 28.7584121,13.4538569 C28.7784121,13.7538569 28.7584121,14.0538569 28.7584121,14.4138569 L28.7584121,14.4238569 Z"
								id="Path"
							/>
							<path
								d="M11.9184121,35.9838569 L19.9784121,35.9838569 C20.0784121,37.7138569 20.6684121,39.2238569 21.8984121,40.4338569 C24.0084121,42.5138569 27.2284121,42.8338569 29.7184121,41.2338569 C32.2184121,39.6238569 33.2284121,36.4938569 32.1684121,33.6038569 C31.4284121,31.5938569 30.0884121,29.9838569 28.3584121,28.8338569 C25.4384121,26.8738569 22.3784121,25.1438569 19.3884121,23.2838569 C17.2384121,21.9438569 15.0484121,20.6638569 13.0184121,19.1738569 C11.4184121,18.0038569 10.2084121,16.4438569 10.2484121,14.2638569 C10.2884121,12.0238569 12.0684121,10.3138569 14.3784121,10.3038569 C16.6284121,10.3038569 18.4784121,12.0638569 18.5284121,14.2638569 C18.5384121,15.0038569 18.5284121,15.7438569 18.5284121,16.6138569 C19.9584121,16.6138569 21.3484121,16.6438569 22.7384121,16.6038569 C23.4584121,16.5838569 24.0484121,16.7538569 24.6684121,17.1338569 C27.0384121,18.5738569 29.5084121,19.8738569 31.8284121,21.3838569 C35.1084121,23.5238569 37.8484121,26.2038569 39.4384121,29.8738569 C43.2084121,38.5438569 38.2684121,48.1738569 29.0784121,50.1038569 C20.6384121,51.8738569 12.2884121,45.4038569 11.9184121,36.8038569 C11.9084121,36.5638569 11.9184121,36.3138569 11.9184121,36.0038569 L11.9184121,35.9838569 Z"
								id="Path"
							/>
							<path
								d="M39.1784121,14.4238569 L31.0784121,14.4238569 C30.8084121,8.37385692 27.9284121,3.79385692 23.0784121,0.323856915 C24.7884121,-0.546143085 29.6084121,0.423856915 32.3284121,2.19385692 C36.6984121,5.05385692 38.8984121,9.14385692 39.1684121,14.4138569 L39.1784121,14.4238569 Z"
								id="Path"
							/>
							<path
								d="M1.57841213,35.9838569 L9.59841213,35.9838569 C9.86841213,42.0438569 12.7584121,46.6238569 17.6284121,50.1038569 C10.0684121,51.6838569 1.52841213,45.0438569 1.57841213,35.9838569 Z"
								id="Path"
							/>
						</g>
					</g>
				</g></g
			>
			<g
				transform="matrix(2.4850892810364247,0,0,2.4850892810364247,70.6560643270027,-28.902583882096287)"
				fill="#00204a"
			>
				<path
					d="M4.08 40 c-0.2 0 -0.32 -0.16 -0.32 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.32 -0.36 l4.56 0 c0.2 0 0.36 0.16 0.36 0.36 l0 25.68 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.56 0 z M6.16 16 l0 21.56 c0 0.36 0.44 0.36 0.44 0 l0 -21.56 c0 -0.28 -0.44 -0.28 -0.44 0 z M38.44 13.600000000000001 c0.2 0 0.36 0.16 0.36 0.36 l0 25.68 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.36 0 c-0.12 0 -0.32 -0.16 -0.32 -0.36 l0 -14.8 l-4.4 14.92 c-0.08 0.16 -0.16 0.24 -0.32 0.24 l-3.16 0 c-0.12 0 -0.28 -0.08 -0.32 -0.24 l-4.12 -15.2 l0 15.08 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.44 0 c-0.16 0 -0.28 -0.16 -0.28 -0.36 l0 -25.68 c0 -0.2 0.12 -0.36 0.28 -0.36 l5.6 0 c0.16 0 0.32 0.12 0.36 0.24 l4.84 16.2 l5.32 -16.2 c0 -0.12 0.12 -0.24 0.28 -0.24 l5.4 0 z M35.96 37.56 c0 0.28 0.52 0.36 0.52 0 l0 -21.56 c0 -0.08 -0.12 -0.2 -0.24 -0.2 l-1.88 0 c-0.16 0 -0.2 0.12 -0.28 0.2 l-6.64 19.8 l-6.6 -19.84 c0 -0.12 -0.08 -0.16 -0.2 -0.16 l-1.96 0 c-0.12 0 -0.24 0.12 -0.24 0.24 l0 21.52 c0 0.28 0.52 0.36 0.52 0 l0 -21.24 l1.48 0 l6.76 20.32 c0.16 0.28 0.28 0.2 0.48 0 l6.8 -20.32 l1.48 0 l0 21.24 z M58.84 30.759999999999998 l0 -1.24 c0 -0.2 0.16 -0.36 0.36 -0.36 l4.56 0 c0.2 0 0.36 0.16 0.36 0.36 l0 2.52 c0 5.88 -3.16 8.36 -9.12 8.36 c-5.56 0 -9.2 -2.2 -9.2 -8.36 l0 -10.52 c0 -5.92 3.24 -8.28 9.2 -8.28 c5.64 0 9.12 2.16 9.12 8.28 l0 0.84 c0 0.2 -0.16 0.36 -0.36 0.36 l-4.6 0 c-0.2 0 -0.36 -0.16 -0.36 -0.36 l0 -0.64 c0 -2.2 -1.64 -3.12 -3.6 -3.12 l-0.48 0 c-1.32 0 -2.2 0.36 -2.8 1.16 c-0.56 0.76 -0.76 1.76 -0.76 3.08 l0 7.92 c0 3.48 1.96 4.24 3.56 4.24 l0.48 0 c2.52 0 3.56 -1.68 3.64 -4.24 z M54.92 15.719999999999999 c-4.28 0 -6.76 1.52 -6.76 6.4 l0 9.64 c0 4.44 2.28 6.08 6.76 6.08 c4.2 0 6.72 -1.52 6.72 -6.12 c0 -0.32 -0.48 -0.32 -0.48 0 c0 4.04 -2.2 5.68 -6.24 5.68 c-3.92 0 -6.32 -1.36 -6.32 -5.64 l0 -9.64 c0 -4.16 1.96 -5.96 6.32 -5.96 c5.68 0 5.88 3.6 5.88 4 c0 0.36 0.56 0.4 0.56 0 c0 -3.32 -3.36 -4.44 -6.44 -4.44 z"
				/>
			</g>
		</svg>
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
