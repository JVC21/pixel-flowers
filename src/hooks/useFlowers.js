import { getFlowers } from "../services/firestore-service.js"
import { useState, useEffect } from "react"

export function useFlowers() {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        getFlowers().then(data => setFlowers(data))
    }, [])

    return flowers
}