export class Profile {

    constructor({id, name, surname, age, country}) {
        this.id=id; //this is the user id
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.country=country;
    }

    toJson() {
        return {
            name: this.name,
            surname: this.surname,
            age: this.age,
            country: this.country,
        }
    }

    static fromFirebase(docSnap) {
        const data = docSnap.data();

        return new Profile({
            id: docSnap.id,
            name: data.name,
            surname: data.surname,
            age: data.age,
            country: data.country,
        });
    }
}