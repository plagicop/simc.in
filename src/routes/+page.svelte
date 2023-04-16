<script lang="ts">
	import { goto } from "$app/navigation";
	import { authStore } from "$lib/stores";
	import { onMount } from "svelte";

    $: if ($authStore) {
        onMount(() => goto('/dashboard'))
    } else {
        onMount(() => goto('/login'))
    }
</script>