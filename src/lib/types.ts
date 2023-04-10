export interface FileBlob {
    name: string,
    type: string,
    size: number,
    blob: Blob,
    base64String?: any
}