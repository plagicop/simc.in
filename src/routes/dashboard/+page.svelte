<script lang="ts">
    import "./style.scss"

    let doc1: string, doc2: string
    let doc1file: any, doc2file: any
</script>

<div class="w-full flex flex-col px-8 py-8 items-center gap-y-6">
    <div class="text-2xl font-semibold">Similarity Checker</div>
    <div class="w-full grid dashmain gap-x-8">
        <div class="w-full flex flex-col items-center gap-y-4">
            {#if !doc1file}
                <div class="w-full flex flex-col">
                    <textarea bind:value={doc1} class="w-full h-64 p-4 border border-gray-300 rounded-lg" placeholder="Paste your text here"></textarea>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span on:click={
                        () => {
                            doc1 = ""
                        }
                    } class="ml-1 text-sm text-gray-500 cursor-pointer">Clear</span>
                </div>
                <span class="text-lg font-semibold">OR</span>
                <button
                    class="upload-btn"
                    on:click={
                        () => {
                            document.getElementById("doc1file")?.click()
                        }
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"/></svg>
                    Upload a File
                </button>
                <input type="file" accept=".txt, .pdf, .doc, .docx" class="hidden" id="doc1file" on:input={
                    (e) => {
                        // make it blob 
                        const file = e.target?.files[0]
                        const reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onload = () => {
                            doc1file = reader.result
                        }
                    }
                } /> 
            {/if}
        </div>
        <div class="w-full flex flex-col items-center gap-y-4">
            {#if !doc2file}
                <div class="w-full flex flex-col">
                    <textarea bind:value={doc2} class="w-full h-64 p-4 border border-gray-300 rounded-lg" placeholder="Paste your text here"></textarea>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span on:click={
                        () => {
                            doc2 = ""
                        }
                    } class="ml-1 text-sm text-gray-500 cursor-pointer">Clear</span>
                </div>
                <span class="text-lg font-semibold">OR</span>
                <button
                    class="upload-btn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"/></svg>
                    Upload a File
                </button>
            {/if}
        </div>        
    </div>
    <button
        class="flex gap-4 justify-center items-center w-fit px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
    >
        Check Similarity
    </button>
</div>