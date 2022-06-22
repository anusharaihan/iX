import {
    collection, addDoc,
    query, getDocs,
    doc, updateDoc,
    deleteDoc,
} from 'firebase/firestore';

import{ db } from '../firebase/firebase'
import { Task } from '../models/task';
class TaskService {

    constructor() {
        this.collection = 'tasks';
    }
    //CREATE
    async createTask(task) {
        const collectionRef = collection(db, this.collection);

        const docRef = await addDoc(collectionRef, {
            name: task.name,
            complete: task.complete
        });
        task.id = docRef.id;
        return task;
    }
    
    //READ
    async fetchTasks() {
        const q = query(collection(db, this.collection));

        const querySnapshot = await getDocs(q);

        const tasks = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            tasks.push (new Task(
                doc.id,
                data.name,
                data.complete
            ));
        });
        return tasks;
    }

    //UPDATE
    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id);
        await updateDoc(docRef, {
            name: task.name,
            complete: task.complete,
        });
        return task;
    }

    //DELETE
    async deleteTask(taskId) {
        const docRef = doc(db, this.collection, taskId);
        await deleteDoc(docRef);
    }


}

const service = new TaskService();
export default service;