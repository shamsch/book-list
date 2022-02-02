//all interfaces used in this application are defined here

export interface IBooks{
    books: {
        name: string;
        author: string;
        id: string;
        goodReadsUrl: string;
    }[] | null
}