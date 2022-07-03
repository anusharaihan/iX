
export class Task {
    constructor({id, name, complete,userId}) {
        this.id = id;
        this.name = name;
        this.complete = complete;
        this.userId = userId
    }

    toJson() {
        return {
            name: this.name,
            complete: this.complete,
            userId: this.userId,
        }
    }

    static fromFirebase(docRef) {
        const data = docRef.data();
        return new Task({
            id: docRef.id,
            name: data.complete,
            complete: data.complete,
            userId: data.userId,
        })
    }
}
