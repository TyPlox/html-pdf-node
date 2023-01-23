declare module 'html-pdf-node' {
    interface IFile {
        content?: string;
        file?: string;
    }

    interface IOptions {
        args?: Array<string>;
        path?: string;
        scale?: number;
        displayHeaderFooter?: boolean;
        headerTemplate?: string;
        footerTemplate?: string;
        printBackground?: boolean;
        landscape?: boolean;
        format?: string;
        width?: string|number;
        height?: string|number;
        margin?: {
            top?: string|number;
            right?: string|number;
            bottom?: string|number;
            left?: string|number;
        };
        referCSSPageSize?: boolean;
    }

    export async function generatePdf(file: IFile, options: IOptions, callback?): Promise<Buffer>;

    export async function generatePdfs(files: Array<IFile>, options: IOptions, callback?): Promise<Buffer[]>;
}
