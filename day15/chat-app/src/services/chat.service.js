import {
    collection,
    addDoc, 
    query,
    where,
    onSnapshot

} from 'firebase/firestore'

import {db} from '../firebase/firebase'
import {Chat} from '../models/chat'

class ChatService{

    constructor() {
        this.collection = 'chats';
    }


    // CREATE
    async createChat(chat) {
        const collectionRef = collection(db, this.collection)
        const docRef = await addDoc(collectionRef, chat.toJson());

        chat.id = docRef.id;
        return chat;
    }

    //READ (WITH REALTIME UPDATE)
    // user is the user to subscribe for
    // onChatsUpdate is the callback function
    subscribeToUserChats(user, onChatsUpdate) {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef, where('users', 'array-contains', user.uid));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chats = [];
            querySnapshot.forEach((doc) => {
                chats.push(Chat.fromFirebase(doc));
            })
            onChatsUpdate(chats);
        });

        return unsubscribe;
    }
}

const service = new ChatService();
export default service;