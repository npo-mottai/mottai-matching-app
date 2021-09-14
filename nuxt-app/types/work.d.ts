/* eslint-disable no-use-before-define */
import firebase from 'firebase'

/**
 * Nuxt.js で表示するデータクラスとしての Work 型
 */
interface Work {
  reference: firebase.firestore.DocumentReference<Work>
  documentId: string,
  address: string
  createdAt: firebase.firestore.Timestamp
  description: string
  hostBirthDate: Date | null
  hostFirstName: string
  hostFirstNameKana: string
  hostLastName: string
  hostLastNameKana: string
  hostMessage: string
  hostRef: firebase.firestore.DocumentReference // TODO: 型をつける
  imageURLs: string[]
  mainImageURL: string
  options: string[]
  prefecture: string
  reward: string
  rewardDescription: string
  station: string
  thingsToBring: string
  title: string
  updatedAt: firebase.firestore.Timestamp
}

/**
 * Firestore のデータを読み書きする Work 型
 */
interface WorkDocument {
  address: string
  createdAt: firebase.firestore.FieldValue
  description: string
  hostBirthDate?: Date | null
  hostFirstName: string
  hostFirstNameKana: string
  hostLastName: string
  hostLastNameKana: string
  hostMessage: string
  hostRef: firebase.firestore.DocumentReference // TODO: 型をつける
  imageURLs: string[] | null
  mainImageURL: string
  options: string[] | null
  prefecture: string
  reward: string
  rewardDescription: string
  station: string
  thingsToBring: string
  title: string
  updatedAt: firebase.firestore.FieldValue
}
