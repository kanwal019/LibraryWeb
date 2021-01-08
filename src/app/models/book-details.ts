export interface IBook {
    id: string;
    name: string;
    author: string;
    status: string;
}

export class Book implements IBook {
    id: string;
    name: string;
    author: string;
    status: string;

    constructor(id: string,
        name: string,
        author: string,
        status: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.status = status;
    }
}