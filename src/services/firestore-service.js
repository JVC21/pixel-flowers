import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase.config.js"

function timestampToDateString(timestamp) {
    if (!timestamp || !timestamp.seconds) return ""

    const date = new Date(timestamp.seconds * 1000)

    return date.toISOString().slice(0, 10)
}

export async function getFlowers() {
    const querySnapshot =  await getDocs(collection(db, "flowers"))

    return querySnapshot.docs.map(doc => {
        const data = doc.data()
        return {
            id: doc.id,
            ...data,
            dateAdded: timestampToDateString(data.dateAdded)
        }
    })
}

export async function getFlowerById(id) {
    const docRef = doc(db, "flowers", id)
    const docSnap = await getDoc(docRef)
    
    if (!docSnap.exists()) return null

    const data = docSnap.data()

    return  {
        id: docSnap.id,
        ...data,
        dateAdded: timestampToDateString(data.dateAdded)
    }
}