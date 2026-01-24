import { useState, useEffect } from "react"
import { getFlowerById as getFlowerByIdFromFirebase } from '../services/firestore-service.js'
import { getFlowerById as getFlowerByIdFromLocal } from '../services/data-service.js'

const useLocal = import.meta.env.VITE_USE_LOCAL_DATA === 'true'

export function useFlower(id) {
    const [flower, setFlower] = useState(null)

    useEffect(() => {
        const getFlowerById = useLocal ? getFlowerByIdFromLocal : getFlowerByIdFromFirebase
        getFlowerById(id).then(data => setFlower(data))
    }, [id])

    return flower
}