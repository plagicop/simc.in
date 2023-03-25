<script>
	import { onMount } from "svelte";
    import "../app.css";
	import { auth } from "../firebase";
    import { Toaster } from "svelte-french-toast";

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
        });
    });
</script>

<Toaster />
<slot />