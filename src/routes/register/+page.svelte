<script>
	import { goto } from "$app/navigation";
	import { authHandlers, authStore, isLoading } from "$lib/stores";
	import toast from "svelte-french-toast";
	import Robo from "../../components/Robo.svelte";

    $: $authStore && goto('dashboard');
    isLoading.set(false);

    let name = ''
    let email = ''
    let password = ''
    let cpassword = ''
    let loginerremail = false
    let loginerrpwd = false

    const handleRegister = async () => {
        if (email === "") {
            loginerremail = true
            toast.error("Please enter your email")
            return
        } else if (password === "" || password !== cpassword) {
            loginerrpwd = true
            toast.error("Please enter your password")
            return
        } else if (name === "" || name.length < 3 ) {
            loginerrpwd = true
            {name.length < 3 ? toast.error("Name should be atleast 3 characters") : toast.error("Please enter your name")}
            return
        }
        await authHandlers.register(name, email, password)
    }
</script>

<div class="flex flex-col w-full items-center justify-center h-full mt-8">
    <!-- <Logo classes="w-64 mx-auto mb-8" /> -->
    <Robo />
    <div class="container bg-white shadow flex flex-col sm:max-w-screen-sm px-6 py-6 items-center rounded-lg">
        <form class="w-full" on:submit={ e => {
            e.preventDefault()

        }} autocomplete="off">
            <h1 class="text-2xl font-semibold text-gray-800 sm:text-3xl text-center">Register</h1>
            <label for="pwd" class="mb-3 ml-1 block text-base font-medium text-gray-700 mt-8">Name</label>
            <div class="relative flex items-center mt-1">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </span>
                <input type="text" bind:value={name} class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Name">
            </div>
            <label for="pwd" class="mb-3 ml-1 block text-base font-medium text-gray-700 mt-4">Email Address</label>
            <div class="relative flex items-center mt-1">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>
                <input type="email" bind:value={email} on:input={()=>{loginerremail = false}} class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 {loginerremail ? "border-red-500" : ""}" placeholder="Enter Your Email address">
            </div>
            <label for="pwd" class="mb-3 ml-1 block text-base font-medium text-gray-700 mt-4">Password</label>
            <div class="relative flex items-center mt-1">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>
                <input type="password" bind:value={password} on:input={()=>{loginerrpwd = false}} class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 {loginerrpwd ? "border-red-500" : ""}" placeholder="Enter Your Password">
            </div>
            <label for="pwd" class="mb-3 ml-1 block text-base font-medium text-gray-700 mt-4">Confirm Password</label>
            <div class="relative flex items-center mt-1">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>
                <input type="password" bind:value={cpassword} on:input={()=>{loginerrpwd = false}} class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 {loginerrpwd ? "border-red-500" : ""}" placeholder="Confirm Your Password">
            </div>
            <div class="mt-6">
                <button type="submit" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                    Register
                </button>
                <div class="mt-6 text-center">
                    Already have an account?
                    <a href="/login" class="text-indigo-500 hover:underline">
                        Log in
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
