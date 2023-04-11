export interface FileBlob {
    name: string,
    type: string,
    size: number,
    blob: Blob,
    base64String?: any
}

export interface SingleFetchBody {
    isdoc1blob: boolean,
    isdoc2blob: boolean,
    doc1?: string,
    doc2?: string
    doc1blob?: string
    doc1fileType?: string
    doc2blob?: string
    doc2fileType?: string
}