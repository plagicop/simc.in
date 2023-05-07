<script lang="ts">
	export let className:string | undefined = undefined;
</script>

<button
	class="upload-btn {className}"
	on:click
>
	<slot />
</button>

<style lang="scss">
	.upload-btn {
		@apply flex gap-4 justify-center items-center w-fit px-6 py-3 text-sm font-medium tracking-wide text-gray-600 capitalize transition-all duration-300 border border-indigo-500 rounded-lg hover:bg-indigo-400 hover:text-white focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50 select-none;
		
		:global(svg) {
			@apply stroke-current;
		}

		&:hover {
			:global(svg) {
				@apply stroke-white;
			}
		}
	}
</style>
