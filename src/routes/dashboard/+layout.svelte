<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore, isLoading } from '$lib/stores';
	import LeftBar from '../../components/LeftBar.svelte';
	// import './layoutstyle.scss';
	import { onMount } from 'svelte';
	import TopBar from '../../components/TopBar.svelte';

	$: $authStore === null && onMount(() => goto('/login'));
	isLoading.set(false);
</script>

<div class="main">
    <LeftBar />
    <div class="flex flex-col">
        <TopBar/>
        <slot />
    </div>
</div>

<style lang="scss">
    .main {
        height: 100vh;
        width: inherit;

        display: grid;
        grid-template-columns: min-content 4fr;
    }    
</style>