<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import type { FileBlob } from '$lib/types';
	import { blobToBase64 } from '$lib/utils';
	import { toast } from 'svelte-french-toast';
	import Button from '../../../components/Button.svelte';
	import IconButton from '../../../components/IconButton.svelte';
	import CrossIcon from '../../../components/Icons/CrossIcon.svelte';
	import FileIcon from '../../../components/Icons/FileIcon.svelte';
	import UploadIcon from '../../../components/Icons/UploadIcon.svelte';

	let files: FileBlob[] = [];
	let result: {
		file1: string;
		file2: string;
		similarity: number;
	}[];

	pageTitle.set("Multi Similarity Checker")

	// result = [
	// 	{
	// 		file1: 'bruh',
	// 		file2: 'bruh',
	// 		similarity: 43
	// 	},
	// 	{
	// 		file1: 'bruh',
	// 		file2: 'bruh',
	// 		similarity: 43
	// 	}
	// ];

	const onFileInputHandler = (e: any) => {
		const inputfiles: FileList = e.target?.files;
		Array.from(inputfiles).forEach((file) => {
			const blob = new Blob([file], { type: file.type });
			const docfile: FileBlob = {
				name: file.name,
				type: file.type,
				size: file.size,
				blob
			};
			blobToBase64(docfile.blob)
				.then((base64String) => {
					docfile.base64String = base64String;
				})
				.catch((error) => {
					// Handle the error
					console.error(error);
				});
			files = [...files, docfile];
		});
		e.target.value = '';
	};

	const handleSimilarityCheck = () => {
		const fbody: any = {
			noofdocs: files.length
		};
		files.forEach((file, i) => {
			fbody[`doc${i}`] = {
				name: file.name,
				type: file.type,
				base64: file.base64String
			};
		});
		fetch('http://simc.sparsh.eu.org/multisimilarity', {
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
				if (data.status === 'error') {
					toast.error(data.error);
					return;
				}
				result = data.data
			});
	};
</script>

<div class="w-full flex flex-col px-8 py-8 items-center gap-y-6 overflow-auto">
	{#if result}
		<h3 class="text-xl">Results</h3>
		<div class="grid grid-cols-3 w-1/2 gap-y-6">
			{#each result as i}
				<div class="flex border items-center w-full px-6 py-4 rounded-lg justify-between">
					<div class="flex items-center gap-4">
						<FileIcon size={48} />
						<span>{i.file1}</span>
					</div>
				</div>
				<div class="flex items-center justify-center gap-2">
					<span class="border-t w-full" />
					{i.similarity * 100}%
					<span class="border-t w-full" />
				</div>
				<div class="flex border items-center w-full px-6 py-4 rounded-lg justify-between">
					<div class="flex items-center gap-4">
						<FileIcon size={48} />
						<span>{i.file2}</span>
					</div>
				</div>
			{/each}
		</div>
		<Button
			on:click={() => {
				result = undefined;
				files = [];
			}}
		>
			Reset
		</Button>
	{:else}
		<div class="flex flex-col gap-2 w-full items-center mt-4">
			{#each files as file, i}
				<div class="flex border items-center w-1/3 px-6 py-4 rounded-lg justify-between">
					<div class="flex items-center gap-4">
						<FileIcon size={48} />
						<span>{file.name}</span>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						on:click={() => {
							files = [...files.slice(0, i), ...files.slice(i + 1)];
						}}
					>
						<CrossIcon />
					</div>
				</div>
			{/each}
		</div>
		<IconButton
			className="mt-8"
			on:click={() => {
				document.getElementById('file-input')?.click();
			}}
		>
			<UploadIcon />
			Upload File
		</IconButton>
		<input
			type="file"
			accept=".txt, .pdf, .doc, .docx"
			class="hidden"
			id="file-input"
			multiple
			on:input={onFileInputHandler}
		/>
		<Button
			on:click={() => {
				handleSimilarityCheck()
			}}
		>
			Check Similarity
		</Button>
	{/if}
</div>
