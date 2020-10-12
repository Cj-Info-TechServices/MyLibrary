export class Book {
    
    id: number;
    name: string;
    author: string;
    dateRead: Date; // this has to be entered by the user in other for this to be correct
    read: boolean;


    constructor(id?:number, bookName?:string, bookAuthor?:string, readFlag?:boolean, date?:Date){
        this.id = (id === undefined)? 0: id;
        this.name = (bookName === undefined)? "": bookName;
        this.author = (bookAuthor === undefined)? "": bookAuthor;
        this.read = (readFlag === undefined)? false : readFlag;
        this.dateRead = (date === undefined)? undefined: date;
    }

    /**
     * name
     */
    public toString(): string {
        return ("Book name: " + this.name + " Author's name: " + this.author + " date read: " + this.dateRead + " isRead: " + this.read);
    }
}
