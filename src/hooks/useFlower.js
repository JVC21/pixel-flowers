import { useState, useEffect } from "react"
import { getFlowerById } from "../services/firestore-service.js"

export function useFlower(id) {
    const [flower, setFlower] = useState(null)

    useEffect(() => {
        getFlowerById(id).then(data => setFlower(data))
    }, [id])

    return flower
}