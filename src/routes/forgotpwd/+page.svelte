<script lang="ts">
	import { toast } from 'svelte-french-toast';
	import { sendPasswordResetEmail } from 'firebase/auth';
	import { auth } from '../../firebase';
	import NormalRobo from '../../components/Robo/NormalRobo.svelte';

	let email: string = '';
	let closedeye: boolean = false;
</script>

<div class="flex flex-col w-full h-full items-center justify-center">
	<!-- <Logo classes="w-64 mx-auto mb-8" /> -->
	<NormalRobo closedeye={closedeye} handsoneye={false} />
	<div
		class="container bg-white shadow flex flex-col sm:max-w-screen-sm px-6 py-6 pb-10 items-center rounded-lg"
	>
		<form
			class="w-full"
			on:submit={(e) => {
				e.preventDefault();
				sendPasswordResetEmail(auth, email)
					.then(() => {
						toast.success('Email sent');
					})
					.catch((error) => {
						console.log(error);
						toast.error('An error occured, please try again later');
					});
			}}
		>
			<h1 class="text-2xl font-semibold text-gray-800 sm:text-3xl text-center">Forgot Password</h1>
			<label for="email" class="mb-3 ml-1 block text-base font-medium text-gray-700 mt-8"
				>Email address</label
			>
			<div class="relative flex items-center mt-1">
				<span class="absolute">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 mx-3 text-gray-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</span>
				<input
					type="email"
					bind:value={email}
					class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
					placeholder="Email address"
					on:input={() => {
						closedeye = email ? false : true
					}}
				/>
			</div>
			<div class="mt-6">
				<button
					type="submit"
					class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
				>
					Send Password Reset Mail
				</button>
				<div class="mt-2 text-center">
					Don’t have an account yet?
					<a href="/register" class="text-indigo-500 hover:underline"> Register </a>
				</div>
			</div>
		</form>
	</div>
</div>
