import firebase from 'firebase'
import { workConverter } from '~/converters/workConverter'
import firebaseConfig from '~/confidential/dev_firebase_service_key.json'
import { Work } from '~/types/work'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()

export const worksCollectionRef = db.collection('read').doc('v1').collection('works')
export const workDocumentRef = (documentId: string) => {
  return worksCollectionRef.doc(documentId)
}

/**
 * /read/v1/works コレクションから Work 一覧を取得する
 */
export const fetchWorks = async (): Promise<Work[]> => {
  const querySnapshot = await worksCollectionRef
    .orderBy('updatedAt', 'desc')
    .withConverter(workConverter)
    .get()
  const works = querySnapshot.docs.map(doc => doc.data())
  return works
}

/**
 * /read/v1/works/{documentId} の Work ドキュメントを取得する
 */
export const fetchWork = async (documentId: string): Promise<Work | null> => {
  const documentQuerySnapshot = await workDocumentRef(documentId)
    .withConverter(workConverter).get()
  const work = documentQuerySnapshot.data()
  return work ?? null
}
