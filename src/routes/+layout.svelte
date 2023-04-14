<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { auth } from '../firebase';
	import { Toaster } from 'svelte-french-toast';
	import { authStore, isLoading } from '$lib/stores';
	import { goto } from '$app/navigation';

	isLoading.set(true);

	onMount(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				authStore.set(user);
				goto('dashboard');
			} else {
				authStore.set(null);
				goto('login');
			}
		});
	});
</script>

<Toaster />
{#if $isLoading}
	<div class="flex justify-center items-center h-screen">
		<div class="custom-loader" />
	</div>
{/if}
<div class="h-screen overflow-hidden {$authStore === null ?? 'hidden'}">
	<slot />
</div>

<style>
	.custom-loader {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: radial-gradient(farthest-side, #766df4 94%, #0000) top/4px 4px no-repeat,
			conic-gradient(#0000 30%, #766df4);
		-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
		animation: s3 1s infinite linear;
	}

	@keyframes s3 {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
