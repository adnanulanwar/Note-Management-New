export class Note {
    public id: number;
    public noteMessage: string;
    public noteTypeInt: number;
    public userID: number;
    public noteCreateTime: Date;
    public errorMessage: string;
    public reminderTime: Date;
    public constructor() {
        this.id = 0;
        this.noteMessage = "";
        this.noteTypeInt = 0;
        this.userID = 0;
        this.noteCreateTime = new Date();
        this.reminderTime = new Date();
        this.errorMessage = "";
    }
}