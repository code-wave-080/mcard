import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
    QueryDocumentSnapshot,
    startAfter,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@constants'
import { Card } from '@models/card'
import { CardsPage } from '@components/home/CardList'

type Cursor = QueryDocumentSnapshot<Card> | null

export async function getCards(cursor: Cursor): Promise<CardsPage> {
    const base = collection(store, COLLECTIONS.CARD)

    const q = cursor
        ? query(base, startAfter(cursor), limit(20))
        : query(base, limit(20))

    const snap = await getDocs(q)

    const lastVisible =
        (snap.docs.at(-1) as QueryDocumentSnapshot<Card>) ?? null

    const items = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Card),
    }))

    return { items, lastVisible }
}

export async function getCard(id: string) {
    const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))

    return {
        id,
        ...(snapshot.data() as Card),
    }
}
