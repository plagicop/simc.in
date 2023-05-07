<script lang="ts">
	import { authStore, pageTitle } from '$lib/stores';
</script>

<div class="topbar">
	<div class="font-semibold text-lg">
		{$pageTitle}
	</div>
	<div class="end">
		<div class="profile">
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
			>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</svg>
			<div class="info">
				<span>{$authStore?.displayName}</span>
				<span>{$authStore?.email}</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.topbar {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		background-color: #fff;
		padding: 1rem 2rem;
		@apply border-b border-l-white shadow-lg;

		.end {
			height: 100%;

			display: flex;
			align-items: center;

			gap: 1rem;

			.profile {
				display: flex;
				align-items: center;
				gap: 1rem;

				// img {
				// 	width: auto;
				// 	height: 32px;
				// 	border-radius: 1rem;
				// }

				.info {
					width: 100%;

					display: flex;
					flex-direction: column;
					align-items: flex-start;

					@media screen and (max-width: 768px) {
						display: none;
					}

					span {
						font-size: 0.75rem;
					}
				}
			}
		}
	}
</style>
