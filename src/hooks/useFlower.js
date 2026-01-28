import { useState, useEffect } from 'react'
import { getFlowerById } from '@data-service'

export function useFlower(id) {
    const [flower, setFlower] = useState(null)

    useEffect(() => {
        getFlowerById(id).then(data => setFlower(data))
    }, [id])

    return flower
}