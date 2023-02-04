import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

const useCollection = (col, dependencies = [], querys = null) => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)

        
        const collectionRef = collection(db, col)
        const q = querys
                    ? query(collectionRef, ...querys )
                    : collectionRef
       
                    
        getDocs(q)
            .then((resp) => {
                
                setData( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, dependencies)


    return {
        data,
        loading
    }
}

export default useCollection