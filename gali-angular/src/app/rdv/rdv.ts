export class Rdv {
    id: number;
    hairdresser: string;
    firstname: string;
    lastname: string;
    date: string;
    hour: string;
    description: string;

    constructor(
        id: number,
        hairdresser: string,
        firstname: string,
        lastname: string,
        date: string,
        hour: string,
        description: string
    ) {
        this.id = id;
        this.hairdresser = hairdresser;
        this.firstname = firstname;
        this.lastname = lastname;
        this.date = date,
        this.hour = hour,
        this.description = description;
    }
}
