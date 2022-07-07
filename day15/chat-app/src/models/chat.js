export class Chat {
    constructor({
        id,
        users,
    }) {
        this.id = id;
        this.users = users;
    }

    toJson() { // convert to firebase object
        return {
            users: this.users,
        }
    }

    static fromFirebase(doc) { // converts documents snapshot to
        const data = doc.data();

        return new Chat({
            id: doc.id,
            users: data.users,
        });
    }
}