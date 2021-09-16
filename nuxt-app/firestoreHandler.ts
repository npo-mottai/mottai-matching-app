import firebase from 'firebase'
import { Message, messageConverter } from '~/models/message'
import firebaseConfig from '~/firebase_config.json'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()

// ========================
// User
// ========================
interface User {
  id: string
  userName: string
}

export const usersCollection = db.collection('users')

export const createUser = (
  user: User
): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
  return usersCollection.add(user)
}

export const getUser = async (
  id: string
): Promise<firebase.firestore.DocumentData | undefined | null> => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

// ========================
// Job
// ========================
export const jobsCollection = db.collection('jobs')
export const getJobs =
  async (): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> | null> => {
    const jobSnapshot = await jobsCollection.orderBy('posted_at', 'desc').get()
    return jobSnapshot.empty ? null : jobSnapshot
  }

// ========================
// Chats/Messages
// ========================
export const chatsCollection = db.collection('chats')
export const messagesCollection = (
  chatId: string
): firebase.firestore.CollectionReference => {
  return chatsCollection.doc(chatId).collection('messages')
}

export const createMessage = (
  chatId: string,
  message: Message
): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
  const data = messageConverter.toFirestore(message)
  return messagesCollection(chatId).add(data)
}
