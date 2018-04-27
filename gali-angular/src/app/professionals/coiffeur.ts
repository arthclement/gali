export class Coiffeur {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    gender: boolean;
    phone: string;

    constructor(
        id: number,
        username: string,
        firstname: string,
        lastname: string,
        gender: boolean,
        phone: string
    ) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.phone = phone;
    }
}
