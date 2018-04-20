//data modal class
//to do : match the user profile from the database
export class Cardex {
    constructor(
//properties no ? if it is not optional
        public firstname: string,
        public lastname: string,

        public birthdate: DateTimeFormat,
        public gender: string,
        //type gender to change

        public street: string,
        public postcode: string,
        public city: string,
        public country: string,

        public iduser: number,

        public phone: string

        


    ) {}
    

}