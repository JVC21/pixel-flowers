import { useState, useEffect } from 'react'
import { getFlowers } from '@data-service'

export function useFlowers() {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        getFlowers().then(data => setFlowers(data))
    }, [])

    return flowers
}