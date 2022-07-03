import {
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';
import {db} from '../firebase/firebase'
import {Profile} from '../models/profile';


// import {
//     collection, addDoc,
//     query, getDocs,
//     doc, updateDoc,
//     deleteDoc,
// } from 'firebase/firestore';

class ProfileService {

    constructor() {
        this.collection = 'profiles';
    }

    async fetchProfile(user) {
        const docRef = doc(db, this.collection, user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            //create profile from docSnap
            return Profile.fromFirebase(docSnap);
        } else {
            //return a new profile with the userId
            return new Profile({id: user.uid});
        }
    }

    async saveProfile(profile) {
        const docRef = doc(db, this.collection, profile.id);
        await setDoc(docRef, profile.toJson());

    }
}

const service = new ProfileService();

export default service;