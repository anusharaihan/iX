import {
    collection, addDoc,
    query, getDocs,
    doc, updateDoc,
    deleteDoc,
    where,
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

        const docRef = await addDoc(collectionRef, task.toJson());
        task.id = docRef.id;
        return task;
    }
    
    //READ
    async fetchTasks(user) {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef, where('userId', '==', user.uid));

        const querySnapshot = await getDocs(q);

        const tasks = [];

        querySnapshot.forEach((doc) => {
            tasks.push(Task.fromFirebase(doc))
        });
        return tasks;
    }

    //UPDATE
    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id);
        await updateDoc(docRef, task.toJson());
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