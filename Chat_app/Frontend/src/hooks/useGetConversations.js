import React, { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/users")

        const data = await res.json()
        if (data) {
          setConversations(data)
        } else {
          throw new Error(data.error)
        }
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getConversation()
  }, [])

  return { loading, conversations }
}

export default useGetConversations
