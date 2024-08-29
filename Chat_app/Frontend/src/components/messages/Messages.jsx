import { BiLogoFacebook } from "react-icons/bi"
import useConversation from "../../zustand/useConversation"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeleton/MessageSkeleton"
import { useEffect, useRef } from "react"

const Messages = () => {
  const { messages, loading } = useGetMessages()
  const lastMessage = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center ">Send a message to start the conversation</p>
      )}
    </div>
  )
}
export default Messages
