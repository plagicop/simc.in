<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import type { FileBlob, SingleFetchBody } from '$lib/types';
	import { blobToBase64 } from '$lib/utils';
	import Button from '../../components/Button.svelte';
	import IconButton from '../../components/IconButton.svelte';
	import UploadIcon from '../../components/Icons/UploadIcon.svelte';
	import './style.scss';

	let doc1: string, doc2: string;
	let doc1file: FileBlob, doc2file: FileBlob;
	let simscore: number | null = null;

	pageTitle.set("Similarity Checker")

	const handleCheck = () => {
		const fbody: SingleFetchBody = {
			isdoc1blob: false,
			isdoc2blob: false
		};
		if (doc1file) {
			fbody.isdoc1blob = true;
			fbody.doc1blob = doc1file.base64String;
			fbody.doc1fileType = doc1file.type;
		} else {
			fbody.doc1 = doc1;
		}
		if (doc2file) {
			fbody.isdoc2blob = true;
			fbody.doc2blob = doc2file.base64String;
			fbody.doc2fileType = doc2file.type;
		} else {
			fbody.doc2 = doc2;
		}
		fetch('http://127.0.0.1:5000/similarity', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(fbody)
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				simscore = data.similarity_score * 100;
			});
	};
</script>

<div class="w-full flex flex-col px-8 py-8 items-center gap-y-6">
	{#if simscore == null}
		<div class="w-full grid dashmain gap-x-8 mt-8">
			<div class="w-full flex flex-col items-center gap-y-4">
				{#if !doc1file}
					<div class="w-full flex flex-col">
						<textarea
							bind:value={doc1}
							class="w-full h-64 p-4 border border-gray-300 rounded-lg"
							placeholder="Paste your text here"
						/>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							on:click={() => {
								doc1 = '';
							}}
							class="ml-1 text-sm text-gray-500 cursor-pointer">Clear</span
						>
					</div>
					<span class="text-lg font-semibold">OR</span>
					<IconButton
						on:click={() => {
							document.getElementById('doc1file')?.click();
						}}
					>
						<UploadIcon />
						Upload a File
					</IconButton>
					<input
						type="file"
						accept=".txt, .pdf, .doc, .docx"
						class="hidden"
						id="doc1file"
						on:input={(e) => {
							// make it blob
							// @ts-ignore
							const file = e.target.files[0];
							const blob = new Blob([file], { type: file.type });
							doc1file = {
								name: file.name,
								type: file.type,
								size: file.size,
								blob
							};
							blobToBase64(doc1file.blob)
								.then((base64String) => {
									doc1file.base64String = base64String;
								})
								.catch((error) => {
									// Handle the error
									console.error(error);
								});
						}}
					/>
				{:else}
					<div>{doc1file.name}</div>
				{/if}
			</div>
			<div class="w-full flex flex-col items-center gap-y-4">
				{#if !doc2file}
					<div class="w-full flex flex-col">
						<textarea
							bind:value={doc2}
							class="w-full h-64 p-4 border border-gray-300 rounded-lg"
							placeholder="Paste your text here"
						/>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							on:click={() => {
								doc2 = '';
							}}
							class="ml-1 text-sm text-gray-500 cursor-pointer">Clear</span
						>
					</div>
					<span class="text-lg font-semibold">OR</span>
					<IconButton
						on:click={() => {
							document.getElementById('doc2file')?.click();
						}}
					>
						<UploadIcon />
						Upload a File
					</IconButton>
					<input
						type="file"
						accept=".txt, .pdf, .doc, .docx"
						multiple={true}
						class="hidden"
						id="doc2file"
						on:input={(e) => {
							// make it blob
							// @ts-ignore
							const file = e.target?.files[0];
							const blob = new Blob([file], { type: file.type });
							doc2file = {
								name: file.name,
								type: file.type,
								size: file.size,
								blob
							};
							blobToBase64(doc2file.blob)
								.then((base64String) => {
									doc2file.base64String = base64String;
								})
								.catch((error) => {
									// Handle the error
									console.error(error);
								});
						}}
					/>
				{:else}
					<div>{doc2file.name}</div>
				{/if}
			</div>
		</div>
		<Button on:click={handleCheck}>
			Check Similarity
		</Button>
	{:else}
		<div class="text-2xl font-semibold">Similarity Score</div>
		<span class="text-xl font-medium">{simscore}%</span>
	{/if}
</div>
