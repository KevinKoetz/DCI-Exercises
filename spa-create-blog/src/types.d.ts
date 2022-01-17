export interface IPost {
    id: string;
    title: string;
    userName: string;
    content: string;
    creationDate: string;
}

export type Posts = IPost[]