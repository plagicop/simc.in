<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { auth } from '../firebase';
	import { Toaster } from 'svelte-french-toast';
	import { authStore, isLoading, pageTitle } from '$lib/stores';
	import { browser } from '$app/environment';

	isLoading.set(true);

	onMount(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				authStore.set(user);
			} else {
				authStore.set(null);
			}
		});
	});

	$: if (browser) document.title = $pageTitle;
</script>

<Toaster />
{#if $isLoading}
	<div class="flex justify-center items-center h-screen">
		<div class="custom-loader" />
	</div>
{/if}
<div class="overflow-hidden {$authStore === null ?? 'hidden'}">
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
