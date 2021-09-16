import firebase from 'firebase'
import { Work, WorkDocument } from '~/types/work'

export const workConverter = {
  fromFirestore (
    snapshot: firebase.firestore.QueryDocumentSnapshot<Work>
  ): Work {
    const doc = snapshot.data()
    return {
      reference: snapshot.ref,
      documentId: snapshot.ref.id,
      address: doc.address,
      createdAt: doc.createdAt,
      description: doc.description,
      hostBirthDate: doc.hostBirthDate ?? null,
      hostFirstName: doc.hostFirstName,
      hostFirstNameKana: doc.hostFirstNameKana,
      hostLastName: doc.hostLastName,
      hostLastNameKana: doc.hostLastNameKana,
      hostMessage: doc.hostMessage,
      hostRef: doc.hostRef,
      imageURLs: doc.imageURLs ?? [],
      mainImageURL: doc.mainImageURL,
      options: doc.options ?? [],
      prefecture: doc.prefecture,
      reward: doc.reward,
      rewardDescription: doc.rewardDescription,
      station: doc.station,
      thingsToBring: doc.thingsToBring,
      title: doc.title,
      updatedAt: doc.updatedAt
    }
  },
  toFirestore (work: Work): WorkDocument {
    return {
      address: work.address,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      description: work.description,
      hostBirthDate: work.hostBirthDate,
      hostFirstName: work.hostFirstName,
      hostFirstNameKana: work.hostFirstNameKana,
      hostLastName: work.hostLastName,
      hostLastNameKana: work.hostLastNameKana,
      hostMessage: work.hostMessage,
      hostRef: work.hostRef,
      imageURLs: work.imageURLs,
      mainImageURL: work.mainImageURL,
      options: work.options,
      prefecture: work.prefecture,
      reward: work.reward,
      rewardDescription: work.rewardDescription,
      station: work.station,
      thingsToBring: work.thingsToBring,
      title: work.title,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }
  }
}
