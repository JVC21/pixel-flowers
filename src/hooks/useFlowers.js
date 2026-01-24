import { useState, useEffect } from "react"
import { getFlowers as getFlowersFromFirebase } from '../services/firestore-service.js'
import { getFlowers as getFlowersFromLocal } from '../services/data-service.js'

const useLocal = import.meta.env.VITE_USE_LOCAL_DATA === 'true'

export function useFlowers() {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        const getFlowers = useLocal ? getFlowersFromLocal : getFlowersFromFirebase
        getFlowers().then(data => setFlowers(data))
    }, [])

    return flowers
}